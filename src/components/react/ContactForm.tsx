import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  sector: string;
  employees: string;
  pain: string;
  usesAI: string;
  budget: string;
}

const TOTAL_STEPS = 3;

const stepFields: Record<number, (keyof FormData)[]> = {
  1: ['name', 'email', 'whatsapp', 'company'],
  2: ['sector', 'employees', 'pain', 'usesAI'],
  3: ['budget'],
};

const inp = (err: boolean) =>
  `w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-sm ${err ? 'border-red-400' : 'border-slate-300'}`;

const sel = (err: boolean) =>
  `w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-sm ${err ? 'border-red-400' : 'border-slate-300'}`;

const lbl = 'block text-sm font-semibold text-slate-700 mb-2';
const err = 'mt-1 text-xs text-red-500';

// Read UTM params + gclid/fbclid from URL
function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
  const result: Record<string, string> = {};
  for (const k of keys) {
    const v = p.get(k);
    if (v) result[k] = v;
  }
  // Also check sessionStorage (in case user navigated after landing)
  try {
    const stored = sessionStorage.getItem('prizely_utm');
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...parsed, ...result }; // URL params take precedence
    }
  } catch {}
  return result;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tracking, setTracking] = useState<Record<string, string>>({});

  const { register, trigger, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: 'onTouched' });

  useEffect(() => {
    const params = getTrackingParams();
    setTracking(params);
    // Persist UTMs in sessionStorage so they survive navigation
    if (Object.keys(params).length > 0) {
      try { sessionStorage.setItem('prizely_utm', JSON.stringify(params)); } catch {}
    }
  }, []);

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, ...tracking }),
      });
    } catch {}
    window.location.href = '/obrigado';
  };

  return (
    <div>
      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i < step ? 'bg-primary-600' : 'bg-slate-200'}`} />
        ))}
      </div>
      <p className="text-xs text-slate-400 mb-6 font-mono">Etapa {step} de {TOTAL_STEPS}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className={lbl}>Nome completo *</label>
              <input {...register('name', { required: 'Obrigatório' })} type="text" placeholder="Seu nome" className={inp(!!errors.name)} />
              {errors.name && <p className={err}>{errors.name.message}</p>}
            </div>
            <div>
              <label className={lbl}>E-mail *</label>
              <input {...register('email', { required: 'Obrigatório', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'E-mail inválido' } })} type="email" placeholder="seu@email.com" className={inp(!!errors.email)} />
              {errors.email && <p className={err}>{errors.email.message}</p>}
            </div>
            <div>
              <label className={lbl}>WhatsApp *</label>
              <input {...register('whatsapp', { required: 'Obrigatório', pattern: { value: /^[0-9]{10,11}$/, message: 'DDD + número (só dígitos)' } })} type="tel" placeholder="11999999999" className={inp(!!errors.whatsapp)} />
              {errors.whatsapp && <p className={err}>{errors.whatsapp.message}</p>}
            </div>
            <div>
              <label className={lbl}>Nome da empresa *</label>
              <input {...register('company', { required: 'Obrigatório' })} type="text" placeholder="Sua empresa" className={inp(!!errors.company)} />
              {errors.company && <p className={err}>{errors.company.message}</p>}
            </div>
            <button type="button" onClick={next} className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2">
              Próximo →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className={lbl}>Setor da empresa *</label>
              <select {...register('sector', { required: 'Obrigatório' })} className={sel(!!errors.sector)}>
                <option value="">Selecione...</option>
                <option value="varejo">Varejo / E-commerce</option>
                <option value="saude">Saúde / Clínicas</option>
                <option value="servicos">Serviços profissionais</option>
                <option value="educacao">Educação</option>
                <option value="industria">Indústria / Manufatura</option>
                <option value="alimentacao">Alimentação / Restaurantes</option>
                <option value="imobiliario">Imobiliário</option>
                <option value="outro">Outro</option>
              </select>
              {errors.sector && <p className={err}>{errors.sector.message}</p>}
            </div>
            <div>
              <label className={lbl}>Número de funcionários *</label>
              <select {...register('employees', { required: 'Obrigatório' })} className={sel(!!errors.employees)}>
                <option value="">Selecione...</option>
                <option value="1-5">1 a 5</option>
                <option value="6-20">6 a 20</option>
                <option value="21-50">21 a 50</option>
                <option value="51+">Mais de 50</option>
              </select>
              {errors.employees && <p className={err}>{errors.employees.message}</p>}
            </div>
            <div>
              <label className={lbl}>Maior dor da empresa hoje *</label>
              <select {...register('pain', { required: 'Obrigatório' })} className={sel(!!errors.pain)}>
                <option value="">Selecione...</option>
                <option value="processos">Processos manuais e repetitivos</option>
                <option value="atendimento">Atendimento ao cliente</option>
                <option value="produtividade">Produtividade da equipe</option>
                <option value="conhecimento">Gestão do conhecimento interno</option>
                <option value="dados">Análise de dados e relatórios</option>
                <option value="outro">Outro</option>
              </select>
              {errors.pain && <p className={err}>{errors.pain.message}</p>}
            </div>
            <div>
              <label className={lbl}>Já usa alguma ferramenta de IA? *</label>
              <select {...register('usesAI', { required: 'Obrigatório' })} className={sel(!!errors.usesAI)}>
                <option value="">Selecione...</option>
                <option value="sim">Sim, e está funcionando bem</option>
                <option value="tentei">Tentei, mas não obtive resultado</option>
                <option value="nao">Não, ainda não usei</option>
              </select>
              {errors.usesAI && <p className={err}>{errors.usesAI.message}</p>}
            </div>
            <div className="flex gap-3 mt-2">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border border-slate-300 text-slate-600 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors">← Voltar</button>
              <button type="button" onClick={next} className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">Próximo →</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className={lbl}>Orçamento mensal para tech / consultoria *</label>
              <select {...register('budget', { required: 'Obrigatório' })} className={sel(!!errors.budget)}>
                <option value="">Selecione...</option>
                <option value="nao-sei">Ainda não sei / preciso de ajuda para definir</option>
                <option value="ate-2k">Até R$ 2.000</option>
                <option value="2k-5k">R$ 2.000 a R$ 5.000</option>
                <option value="acima-5k">Acima de R$ 5.000</option>
              </select>
              {errors.budget && <p className={err}>{errors.budget.message}</p>}
            </div>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
              <strong>O diagnóstico é 100% gratuito.</strong> Você não precisa ter orçamento definido para começar.
            </div>
            <div className="flex gap-3 mt-2">
              <button type="button" onClick={() => setStep(2)} className="flex-1 border border-slate-300 text-slate-600 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors">← Voltar</button>
              <button type="submit" disabled={isSubmitting} className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : 'Quero meu diagnóstico gratuito'}
              </button>
            </div>
            <p className="text-xs text-center text-slate-400">Seus dados estão seguros e não serão compartilhados.</p>
          </div>
        )}
      </form>
    </div>
  );
}
