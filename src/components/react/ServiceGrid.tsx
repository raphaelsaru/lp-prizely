"use client";

import { SearchIcon } from '../icons/search-icon';
import { CompassIcon } from '../icons/compass-icon';
import { SettingsIcon } from '../icons/settings-icon';
import { RocketIcon } from '../icons/rocket-icon';

const services = [
  {
    step: '01',
    Icon: SearchIcon,
    title: 'Diagnóstico de IA',
    badge: 'Gratuito',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description: 'Mapeamos os processos da sua empresa e identificamos onde a IA gera mais impacto — sem custo e sem compromisso.',
    features: ['Reunião de entendimento', 'Mapa de oportunidades', 'Relatório personalizado']
  },
  {
    step: '02',
    Icon: CompassIcon,
    title: 'Consultoria Estratégica',
    badge: 'Popular',
    badgeColor: 'text-primary-400 bg-primary-400/10 border-primary-400/20',
    description: 'Transformamos o diagnóstico em um roadmap claro de implementação — com prioridades, cronograma e métricas de sucesso.',
    features: ['Roadmap personalizado', 'Priorização por ROI', 'Treinamento da equipe']
  },
  {
    step: '03',
    Icon: SettingsIcon,
    title: 'Implementação',
    badge: 'Premium',
    badgeColor: 'text-accent-400 bg-accent-400/10 border-accent-400/20',
    description: 'Nós implementamos as soluções por você: automações, integrações, segundo cérebro da empresa, agentes de IA e muito mais.',
    features: ['Automações e integrações', 'Segundo cérebro da empresa', 'Agentes de IA customizados']
  },
  {
    step: '04',
    Icon: RocketIcon,
    title: 'Mentoria Contínua',
    badge: 'Recorrente',
    badgeColor: 'text-secondary-400 bg-secondary-400/10 border-secondary-400/20',
    description: 'Acompanhamento mensal para evoluir a IA na sua empresa conforme seu negócio cresce e novas necessidades surgem.',
    features: ['Check-in mensal', 'Atualizações e melhorias', 'Suporte prioritário']
  }
];

export default function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map(({ step, Icon, title, badge, badgeColor, description, features }) => (
        <div
          key={step}
          className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
        >
          <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100 group-hover:text-primary-100 transition-colors select-none leading-none">
            {step}
          </div>

          <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${badgeColor}`}>
            {badge}
          </span>

          <div className="mb-4 text-primary-600 relative z-10">
            <Icon size={44} />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{title}</h3>
          <p className="text-slate-500 leading-relaxed mb-6 relative z-10">{description}</p>

          <ul className="space-y-2 relative z-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
