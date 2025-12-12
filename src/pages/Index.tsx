import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ОФИСНЫЙ КОМПЛЕКС</h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
            <a href="#plans" className="text-foreground hover:text-primary transition-colors">Планировки</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <Button>Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Современное пространство для бизнеса
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Двухэтажный офисный комплекс 18×18м с вентилируемым фасадом, озелененными террасами и актуальными архитектурными решениями
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на просмотр
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/780b821b-e81c-46d3-92af-bd878d11782a.jpg" 
                alt="Офисный комплекс"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Характеристики проекта</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">18×18 метров</h4>
                <p className="text-muted-foreground">Оптимальная площадь для размещения офисов разного масштаба</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="Layers" size={24} className="text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">2 этажа</h4>
                <p className="text-muted-foreground">Удобная организация пространства с разделением зон</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wind" size={24} className="text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Вентилируемый фасад</h4>
                <p className="text-muted-foreground">Современная технология для комфортного микроклимата</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trees" size={24} className="text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Зеленые террасы</h4>
                <p className="text-muted-foreground">Озелененные зоны отдыха для сотрудников</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Планировки и пространства</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/bd38bf74-e1eb-431f-8c21-8a5e03ced0cd.jpg" 
                alt="План этажа"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold mb-3 text-primary">Гибкая планировка</h4>
                <p className="text-muted-foreground text-lg">
                  Открытые офисные пространства легко адаптируются под любые требования бизнеса — от стартапов до крупных компаний
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-green mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">Рабочие зоны</h5>
                  <p className="text-muted-foreground">Продуманные open-space офисы с естественным освещением</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-green mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">Переговорные</h5>
                  <p className="text-muted-foreground">Изолированные помещения для встреч и конференций</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-green mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">Зоны отдыха</h5>
                  <p className="text-muted-foreground">Комфортные пространства для перерывов и неформального общения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/10 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-8">Озелененные террасы</h3>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Уникальные зеленые пространства на крыше создают комфортную атмосферу для работы и отдыха сотрудников
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/b3e597e0-2b38-4cbf-952e-2700df17f2f8.jpg" 
              alt="Терраса с озеленением"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Технологии и преимущества</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Thermometer" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Вентилируемый фасад</h4>
                <p className="text-muted-foreground">
                  Инновационная система обеспечивает оптимальную теплоизоляцию и регулирование температуры, снижая затраты на отопление и кондиционирование
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Zap" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Энергоэффективность</h4>
                <p className="text-muted-foreground">
                  Современные решения в области энергосбережения позволяют значительно сократить операционные расходы
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Sparkles" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Бежево-коричневая эстетика</h4>
                <p className="text-muted-foreground">
                  Теплая цветовая гамма фасада создает располагающую атмосферу и гармонично вписывается в городскую среду
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Leaf" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Экологичность</h4>
                <p className="text-muted-foreground">
                  Озеленение террас улучшает микроклимат, очищает воздух и способствует здоровью сотрудников
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Users" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Комфорт для команды</h4>
                <p className="text-muted-foreground">
                  Продуманная планировка и зоны отдыха повышают продуктивность и удовлетворенность сотрудников
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="ShieldCheck" size={32} className="text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Надежность</h4>
                <p className="text-muted-foreground">
                  Использование современных материалов и технологий гарантирует долговечность и безопасность здания
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Готовы начать работу в современном офисе?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной информации о проекте и условиях аренды
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать email
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-primary">ОФИСНЫЙ КОМПЛЕКС</h4>
              <p className="text-muted-foreground">Современное решение для вашего бизнеса</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@office-complex.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon name="Facebook" size={20} className="text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon name="Instagram" size={20} className="text-primary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon name="Linkedin" size={20} className="text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 Офисный Комплекс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
