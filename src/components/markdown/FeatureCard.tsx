import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  children: ReactNode
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-black/5 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="font-bold text-violet-600 dark:text-violet-400 mb-2">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  )
} 