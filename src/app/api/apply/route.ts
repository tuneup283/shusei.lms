import { NextResponse } from 'next/server';
import * as yup from 'yup';
import { PrismaClient } from '@prisma/client';
import { sendConfirmationEmail } from '@/lib/mail';

const prisma = new PrismaClient();

// バリデーションスキーマ
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^[0-9-]+$/).required(),
  message: yup.string(),
  terms: yup.boolean().oneOf([true]).required(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // バリデーション
    await schema.validate(body);

    // データベースに保存
    const application = await prisma.application.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        terms: body.terms,
      },
    });

    // 確認メールを送信
    const emailSent = await sendConfirmationEmail(body.email, body.name);

    if (!emailSent) {
      console.error('Failed to send confirmation email');
      // メール送信に失敗しても、申し込みは成功として扱う
    }

    // 成功レスポンス
    return NextResponse.json(
      { 
        message: '申し込みを受け付けました',
        applicationId: application.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    
    // バリデーションエラーの場合
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { message: '入力内容に問題があります', errors: error.errors },
        { status: 400 }
      );
    }

    // その他のエラーの場合
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 