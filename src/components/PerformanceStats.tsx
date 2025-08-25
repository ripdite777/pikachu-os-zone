import { Cpu, MemoryStick, Settings } from 'lucide-react';

const PerformanceStats = () => {
  const stats = [
    {
      icon: Cpu,
      label: 'Process Sayısı',
      value: '45',
      description: 'Minimal arka plan işlemi'
    },
    {
      icon: MemoryStick,
      label: 'RAM Kullanımı',
      value: '400 MB',
      description: 'Optimize edilmiş bellek yönetimi'
    },
    {
      icon: Settings,
      label: 'Sistem Tabanı',
      value: 'Windows 11',
      description: 'Home x64 (23H2)'
    }
  ];

  return (
    <section id="performans" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ⚡ Performans Özeti
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 border border-border animate-zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              📈 Performans Karşılaştırması
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 text-red-400">
                  🔴 Standart Windows 11
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2.5+ GB RAM kullanımı</li>
                  <li>• 150+ arka plan işlemi</li>
                  <li>• Yavaş başlangıç süresi</li>
                  <li>• Gereksiz bloatware</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 text-primary">
                  ⚡ Pikachu OS
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 400 MB RAM kullanımı</li>
                  <li>• 40-50 arka plan işlemi</li>
                  <li>• Hızlı başlangıç süresi</li>
                  <li>• Temiz ve optimize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;