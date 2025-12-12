import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">АВТОСЕРВИС</h1>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Профессиональный ремонт автомобилей
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Современное оборудование, опытные мастера и гарантия качества на все виды работ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="CalendarCheck" className="mr-2" size={20} />
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/79fafb4f-b7c3-4d87-9b9b-f1d461d5c003.jpg" 
                alt="Автосервис"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей любых марок
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Диагностика</h4>
                <p className="text-muted-foreground mb-4">
                  Компьютерная диагностика всех систем автомобиля на современном оборудовании
                </p>
                <p className="text-primary font-semibold">от 1 500 ₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cog" size={28} className="text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Ремонт двигателя</h4>
                <p className="text-muted-foreground mb-4">
                  Капитальный и текущий ремонт двигателей любой сложности
                </p>
                <p className="text-primary font-semibold">от 15 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Техобслуживание</h4>
                <p className="text-muted-foreground mb-4">
                  Плановое ТО: замена масла, фильтров, жидкостей и расходников
                </p>
                <p className="text-primary font-semibold">от 3 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Disc" size={28} className="text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Ремонт тормозов</h4>
                <p className="text-muted-foreground mb-4">
                  Диагностика и ремонт тормозной системы, замена колодок и дисков
                </p>
                <p className="text-primary font-semibold">от 4 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Hammer" size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Кузовной ремонт</h4>
                <p className="text-muted-foreground mb-4">
                  Рихтовка, сварка, покраска кузова и устранение коррозии
                </p>
                <p className="text-primary font-semibold">от 8 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-accent" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Электрика</h4>
                <p className="text-muted-foreground mb-4">
                  Диагностика и ремонт электрооборудования, проводки, стартеров
                </p>
                <p className="text-primary font-semibold">от 2 500 ₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/109fddbb-a156-46b3-ad46-cd3b7587920a.jpg" 
                alt="Мастер за работой"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold mb-6">Почему выбирают нас?</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Опытные мастера</h5>
                  <p className="text-muted-foreground">Сертифицированные специалисты с опытом работы более 10 лет</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Wrench" size={24} className="text-accent" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Современное оборудование</h5>
                  <p className="text-muted-foreground">Новейшие диагностические стенды и профессиональный инструмент</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Гарантия качества</h5>
                  <p className="text-muted-foreground">Официальная гарантия на все виды работ и запасные части</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Быстрое выполнение</h5>
                  <p className="text-muted-foreground">Соблюдаем сроки и выполняем работы точно в срок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Технологии и оборудование</h3>
            <p className="text-lg text-muted-foreground">
              Мы инвестируем в современное оборудование, чтобы обеспечить максимальное качество диагностики и ремонта
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/85609bd0-81b0-45df-8047-9509d9b2d933/files/0613416a-d978-4bef-9122-cc24b7f0ba8b.jpg" 
              alt="Диагностическое оборудование"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover mb-12"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Monitor" size={32} className="text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">Компьютерная диагностика</h5>
                <p className="text-sm text-muted-foreground">Точное определение неисправностей</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Gauge" size={32} className="text-accent mx-auto mb-3" />
                <h5 className="font-semibold mb-2">Диагностические стенды</h5>
                <p className="text-sm text-muted-foreground">Проверка всех систем авто</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Wrench" size={32} className="text-primary mx-auto mb-3" />
                <h5 className="font-semibold mb-2">Профессиональный инструмент</h5>
                <p className="text-sm text-muted-foreground">Оригинальное оборудование</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Droplet" size={32} className="text-accent mx-auto mb-3" />
                <h5 className="font-semibold mb-2">Качественные материалы</h5>
                <p className="text-sm text-muted-foreground">Сертифицированные запчасти</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-foreground text-background px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-6">Запишитесь на ремонт</h3>
            <p className="text-center text-lg mb-12 opacity-90">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
            <Card className="bg-background text-foreground">
              <CardContent className="pt-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Марка автомобиля</label>
                      <Input placeholder="Toyota Camry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Год выпуска</label>
                      <Input placeholder="2020" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Опишите проблему</label>
                    <Textarea placeholder="Расскажите, что случилось с автомобилем..." rows={4} />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">АВТОСЕРВИС</h4>
              </div>
              <p className="text-muted-foreground">Профессиональный ремонт автомобилей с 2009 года</p>
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
                  info@autoservice.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Автомобильная, 1
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">График работы</h5>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Пн-Пт: 8:00 - 20:00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Сб-Вс: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 Автосервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
