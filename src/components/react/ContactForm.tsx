import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  instagram?: string;
  investment: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulando envio - você pode integrar com seu backend aqui
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.', {
        duration: 5000,
        position: 'top-center',
      });
      
      reset();
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Nome Completo *
          </label>
          <input
            {...register('name', { required: 'Nome é obrigatório' })}
            type="text"
            id="name"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            E-mail *
          </label>
          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            })}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">
            WhatsApp *
          </label>
          <input
            {...register('whatsapp', {
              required: 'WhatsApp é obrigatório',
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: 'Digite apenas números (DDD + número)',
              },
            })}
            type="tel"
            id="whatsapp"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.whatsapp ? 'border-red-500' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
            placeholder="11999999999"
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
          )}
        </div>

        {/* Instagram */}
        <div>
          <label htmlFor="instagram" className="block text-sm font-semibold text-slate-700 mb-2">
            Instagram da Empresa (opcional)
          </label>
          <input
            {...register('instagram')}
            type="text"
            id="instagram"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            placeholder="@suaempresa"
          />
        </div>

        {/* Investment - Campo Estratégico de Qualificação */}
        <div>
          <label htmlFor="investment" className="block text-sm font-semibold text-slate-700 mb-2">
            Quanto sua empresa está disposta a investir mensalmente? *
          </label>
          <select
            {...register('investment', {
              required: 'Por favor, selecione um valor',
            })}
            id="investment"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.investment ? 'border-red-500' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors bg-white`}
          >
            <option value="">Selecione uma faixa de investimento</option>
            <option value="below-3k">Abaixo de R$ 3.000</option>
            <option value="3k-8k">R$ 3.000 a R$ 8.000</option>
            <option value="8k-15k">R$ 8.000 a R$ 15.000</option>
            <option value="above-15k">Acima de R$ 15.000</option>
          </select>
          {errors.investment && (
            <p className="mt-1 text-sm text-red-600">{errors.investment.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Quero Transformar Meu Negócio Agora!'
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-center text-slate-500">
          Ao enviar este formulário, você concorda com nossa Política de Privacidade. 
          Seus dados estão seguros e não serão compartilhados.
        </p>
      </form>
    </>
  );
}



