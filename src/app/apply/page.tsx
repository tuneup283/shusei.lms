'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

// バリデーションスキーマの定義
const schema = yup.object().shape({
  name: yup.string().required('お名前は必須です'),
  company: yup.string().required('会社名は必須です'),
  position: yup.string().required('役職は必須です'),
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
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800 relative">
          <span className="inline-block border-b-4 border-blue-500 pb-2">守成クラブ神戸ベイサイド 例会ゲスト参加申し込み</span>
        </h1>
        
        {/* ステップナビゲーション */}
        <nav className="flex justify-center mb-8">
          <ol className="grid grid-cols-3 gap-2 sm:flex sm:space-x-4 w-full max-w-md mx-auto">
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">1</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">トップページ</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">2</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">動画1</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">3</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">動画2</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">4</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">まとめ</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">5</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">ゲスト申し込み</span>
            </li>
          </ol>
        </nav>
        
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-t-4 border-blue-500">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            申し込みフォーム
          </h2>
          
          {submitStatus === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6 shadow-md">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold">申し込みが完了しました。確認メールをお送りしましたのでご確認ください。</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 shadow-md">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="font-semibold">申し込みの送信に失敗しました。もう一度お試しください。</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800 font-semibold mb-4">基本情報</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前 <span className="text-red-500">*</span>
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errors.company.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    役職 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    {...register('position')}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errors.position.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-green-800 font-semibold mb-4">連絡先情報</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話番号 <span className="text-red-500">*</span>
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-800 font-semibold mb-4">追加情報</p>
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
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <div className="flex items-start sm:items-center">
                <input
                  type="checkbox"
                  id="terms"
                  {...register('terms')}
                  className={`h-5 w-5 mt-1 sm:mt-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                    errors.terms ? 'border-red-500' : ''
                  }`}
                />
                <label htmlFor="terms" className="ml-3 block text-sm sm:text-base text-gray-700">
                  <span className="font-semibold">利用規約に同意する</span> <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.terms && (
                <p className="mt-2 text-sm text-red-600 flex items-center pl-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errors.terms.message}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mt-8">
              <Link 
                href="/lesson/2"
                className="w-full sm:w-auto text-center flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                戻る
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto text-center flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ゲスト参加を申し込む
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 