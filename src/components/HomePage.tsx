import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FLOWERS } from '../data/flowers';
import { Flower as FlowerIcon } from 'lucide-react';

export default function HomePage() {
  const [completedFlowers, setCompletedFlowers] = useState<string[]>([]);

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedFlowers') || '[]');
    setCompletedFlowers(completed);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50 p-6 sm:p-12">
      <header className="max-w-6xl mx-auto mb-16 text-center space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex p-6 bg-brand-200 rounded-[2.5rem] text-brand-700 mb-4 shadow-xl"
        >
          <FlowerIcon className="w-16 h-16" />
        </motion.div>
        <p className="text-xl sm:text-2xl text-brand-600 font-bold tracking-widest uppercase">
          Özel Edirne Koleji
        </p>
        <h1 className="text-6xl sm:text-7xl text-nature-900 leading-tight font-black">
          Çiçek <span className="text-brand-600 italic">Bahçesi</span> 🌸
        </h1>
        <p className="text-2xl text-nature-600 max-w-2xl mx-auto font-medium">
          Çiçekleri keşfetmek için aşağıdan bir çiçek seç!
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FLOWERS.map((flower, index) => {
          const isCompleted = completedFlowers.includes(flower.slug);

          return (
            <motion.div
              key={flower.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-brand-100"
            >
              {/* Visual Header - Always show Emoji on Home Page */}
              <div className="relative h-56 bg-brand-100 flex items-center justify-center overflow-hidden">
                <span className="text-9xl transition-transform duration-500 group-hover:scale-125 select-none">
                  {flower.emoji}
                </span>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                  <h3 className="text-3xl font-black text-nature-900">{flower.name}</h3>
                  <p className="text-lg text-nature-600 italic font-medium">{flower.scientificName}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-nature-600 line-clamp-2 text-lg font-medium">
                  {flower.description}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    to={`/flower/${flower.slug}`}
                    className="flex items-center justify-center gap-3 py-5 bg-nature-800 text-white rounded-2xl font-black text-xl hover:bg-nature-900 transition-colors shadow-lg"
                  >
                    Öğrenmeye Başla 🚀
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </main>

      <footer className="max-w-6xl mx-auto mt-24 pt-12 border-t-4 border-brand-100 text-center text-nature-400 font-bold text-lg">
        <p>© 2026 FloraLearn Eğitim Sistemi. Tüm hakları saklıdır. 🌿</p>
      </footer>
    </div>
  );
}
