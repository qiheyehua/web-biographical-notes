'use client'

import { useEffect } from 'react'

export default function DOMCleaner() {
  useEffect(() => {
    const cleanup = () => {
      // 清理 html 标签上的属性
      const html = document.documentElement
      html.removeAttribute('dm-url')
      
      // 清理 body 标签上的类
      const body = document.body
      if (body) {
        body.classList.remove('vsc-initialized')
        // 保留必要的类
        body.className = 'antialiased'
      }
    }

    // 立即执行一次清理
    cleanup()

    // 设置观察器持续监听变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          cleanup()
        }
      })
    })

    // 观察 html 和 body 元素的属性变化
    observer.observe(document.documentElement, {
      attributes: true
    })
    observer.observe(document.body, {
      attributes: true
    })

    return () => observer.disconnect()
  }, [])

  return null
} 