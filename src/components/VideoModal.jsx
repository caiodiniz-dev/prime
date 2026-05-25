import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import { useEffect } from 'react'

export default function VideoModal({ isOpen, onClose, title, subtitle }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-prime-black/96 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-4xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-prime-gray hover:text-gold transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Frame */}
            <div className="relative aspect-video bg-prime-charcoal2 border border-gold/20 overflow-hidden">
              <div className="corner-tl" /><div className="corner-tr" />
              <div className="corner-bl" /><div className="corner-br" />

              {/* Animated background */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}
                  animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 border-2 border-gold/50 rounded-full flex items-center justify-center"
                >
                  <Play size={40} className="text-gold fill-gold ml-1" />
                </motion.div>
                <div className="text-center">
                  <p className="font-display font-bold text-white text-xl mb-2">{title}</p>
                  <p className="font-accent italic text-prime-gray text-base">{subtitle}</p>
                </div>
                <a
                  href="mailto:contato@agenciaprimefootball.com.br"
                  className="btn-prime mt-2 text-[11px]"
                >
                  <span>Solicitar Portfólio Completo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
