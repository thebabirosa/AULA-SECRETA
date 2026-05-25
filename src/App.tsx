import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 960 segundos = 16 minutos para liberar o conteúdo e o botão
    const delayInSeconds = 960;
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delayInSeconds * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-[30px_15px] bg-[radial-gradient(circle_at_top,_#7c4b74_0%,_#2b1428_60%,_#140b13_100%)] text-white font-sans">
      <div className="w-full max-w-[1100px]">
        <div className="bg-white/5 border border-white/10 backdrop-blur-[12px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* TOPO */}
          <div className="px-[25px] py-[18px] flex justify-center items-center border-b border-white/10 bg-white/5 text-center">
            <h1 className="text-white text-[18px] sm:text-[22px] font-bold tracking-wide">
              Aula Secreta: Os segredos da Mulher Magnética
            </h1>
          </div>

          {/* VÍDEO */}
          <div className="relative w-full bg-black aspect-video">
            <iframe
              id="vslVideo"
              src="https://player.vimeo.com/video/1193649372?title=0&byline=0&portrait=0&dnt=1"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              className="w-full h-full border-none"
            ></iframe>
          </div>

          {/* CTA */}
          <div className="px-[20px] py-[35px] pb-[45px] sm:px-[25px] sm:py-[40px] sm:pb-[50px] text-center min-h-[250px] flex flex-col justify-center items-center">
            {showContent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="mb-6 flex justify-center">
                  <div className="bg-gradient-to-r from-[#c85b91] to-[#8b3d6d] text-white py-[10px] px-[22px] rounded-full text-[13px] font-bold tracking-[1px] uppercase">
                    Condição Especial • Grupo VIP
                  </div>
                </div>

                <h2 className="text-[34px] sm:text-[clamp(26px,4vw,46px)] font-extrabold leading-[1.05] mb-[18px]">
                  Oferta exclusiva por <span className="text-[#ffb6dc]">tempo limitado</span>
                </h2>

                <p className="max-w-[760px] mx-auto mb-[35px] text-[15px] sm:text-[17px] leading-[1.6] text-white/80">
                  Assista ao conteúdo completo para liberar sua condição especial e acessar os benefícios disponíveis apenas para este grupo VIP.
                </p>

                {/* BOTÃO */}
                <div className="flex justify-center items-center">
                  <div className="w-full md:w-auto">
                    <a
                      href="https://payfast.greenn.com.br/redirect/287043"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col md:flex-row items-center justify-center gap-3 bg-gradient-to-r from-[#ff5ca8] to-[#d64b8f] text-white no-underline text-[17px] sm:text-[18px] font-bold py-[20px] sm:py-[22px] px-[20px] sm:px-[42px] rounded-2xl transition-all duration-300 shadow-[0_12px_35px_rgba(255,92,168,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_18px_45px_rgba(255,92,168,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] w-full md:w-auto"
                    >
                      QUERO GARANTIR MINHA VAGA
                    </a>

                    <div className="mt-[18px] text-white/55 text-[13px] tracking-[0.5px]">
                      Pagamento 100% seguro
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
