'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

// バリデーションスキーマの定義
const schema = yup.object().shape({
  name: yup.string().required('お名前は必須です'),
  email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
  phone: yup.string().matches(/^[0-9-]+$/, '有効な電話番号を入力してください').required('電話番号は必須です'),
  message: yup.string(),
  terms: yup.boolean().oneOf([true], '利用規約に同意してください').required('利用規約に同意してください'),
});

type FormData = yup.InferType<typeof schema>;

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // ここに実際のAPIエンドポイントを指定
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">コース申し込み</h1>
        
        <div className="bg-gray-500 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">申し込みフォーム</h2>
          
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              申し込みが完了しました。確認メールをお送りしましたのでご確認ください。
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              申し込みの送信に失敗しました。もう一度お試しください。
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                ご質問・ご要望
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register('terms')}
                className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                  errors.terms ? 'border-red-500' : ''
                }`}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                利用規約に同意する
              </label>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
              )}
            </div>
            
            <div className="flex justify-between">
              <Link 
                href="/lesson/2"
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                戻る
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? '送信中...' : '申し込む'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 