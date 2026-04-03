"use client";

import { ClockIcon } from '../icons/clock-icon';
import { MessageCircleIcon } from '../icons/message-circle-icon';
import { ActivityIcon } from '../icons/activity-icon';
import { BrainIcon } from '../icons/brain-icon';
import { BotIcon } from '../icons/bot-icon';
import { FlameIcon } from '../icons/flame-icon';

const pains = [
  {
    Icon: ClockIcon,
    title: 'Horas perdidas em tarefas repetitivas',
    desc: 'Sua equipe gasta tempo precioso em atividades que a IA já faz em segundos.'
  },
  {
    Icon: MessageCircleIcon,
    title: 'Atendimento lento e sobrecarregado',
    desc: 'Clientes esperando, equipe esgotada. A IA pode atender 24h sem perder qualidade.'
  },
  {
    Icon: ActivityIcon,
    title: 'Relatórios e análises feitos na mão',
    desc: 'Dados espalhados, decisões lentas. A IA organiza e analisa em tempo real.'
  },
  {
    Icon: BrainIcon,
    title: 'Conhecimento só na cabeça dos sócios',
    desc: 'Quando alguém sai, o conhecimento vai junto. A IA cria o segundo cérebro da empresa.'
  },
  {
    Icon: BotIcon,
    title: 'Ferramentas de IA genéricas sem resultado',
    desc: 'ChatGPT aberto no navegador não é estratégia. Você precisa de implementação real.'
  },
  {
    Icon: FlameIcon,
    title: 'Time sobrecarregado com o operacional',
    desc: 'Seus melhores talentos presos no dia a dia. A IA libera para o que importa.'
  }
];

export default function PainGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
      {pains.map(({ Icon, title, desc }) => (
        <div
          key={title}
          className="group p-6 rounded-xl border border-slate-700/50 bg-slate-800/40 hover:border-primary-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 cursor-default"
        >
          <div className="mb-4 text-primary-400">
            <Icon size={44} />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  );
}
