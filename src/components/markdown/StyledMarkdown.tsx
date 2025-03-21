'use client'

import { ReactNode, useEffect, useState } from 'react'
import { remark } from 'remark'
import html from 'remark-html'

interface StyledMarkdownProps {
  children: string
}

export default function StyledMarkdown({ children }: StyledMarkdownProps) {
  const [content, setContent] = useState('')

  useEffect(() => {
    const processMarkdown = async () => {
      const result = await remark()
        .use(html)
        .process(children)
      setContent(result.toString())
    }
    processMarkdown()
  }, [children])

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <div className="relative bg-gradient-to-br from-violet-50/80 via-blue-50/60 to-cyan-50/80 dark:from-violet-900/10 dark:via-blue-900/5 dark:to-cyan-900/10 rounded-3xl p-8 lg:p-12 mb-8 border border-violet-100/50 dark:border-violet-500/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out group">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/20 via-transparent to-cyan-100/20 dark:from-violet-500/5 dark:via-transparent dark:to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        
        {/* Background blur layer */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/20 rounded-3xl transform -skew-y-1 backdrop-blur-[2px]" />
        
        {/* Content container with enhanced typography */}
        <div 
          className="relative space-y-6 prose-headings:font-oswald prose-h1:text-4xl prose-h1:mb-8 prose-h1:font-bold prose-h1:bg-gradient-to-r prose-h1:from-violet-600 prose-h1:to-cyan-600 prose-h1:bg-clip-text prose-h1:text-transparent dark:prose-h1:from-violet-400 dark:prose-h1:to-cyan-400 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:font-semibold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-headings:text-gray-800 dark:prose-headings:text-gray-100 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:no-underline prose-a:border-b prose-a:border-cyan-600/30 dark:prose-a:border-cyan-400/30 hover:prose-a:border-cyan-600 dark:hover:prose-a:border-cyan-400 prose-a:transition-all prose-strong:text-gray-700 dark:prose-strong:text-gray-200 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-cyan-500/50 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600/90 dark:prose-blockquote:text-gray-400/90 prose-code:text-violet-600 dark:prose-code:text-violet-400 prose-code:bg-violet-50/50 dark:prose-code:bg-violet-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-gray-900/95 dark:prose-pre:bg-gray-900/90 prose-pre:shadow-lg prose-img:rounded-lg prose-img:shadow-md hover:prose-img:shadow-lg prose-img:transition-shadow"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
} 