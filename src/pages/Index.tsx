import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSpace, setSelectedSpace] = useState<string>('');
  const [activeSection, setActiveSection] = useState('hero');

  const spaces = [
    {
      id: 1,
      title: 'Кабинет для встреч',
      capacity: '2-4 человека',
      price: '800 ₽/час',
      description: 'Уютный кабинет с мягкой мебелью для деловых встреч и консультаций',
      icon: 'Users'
    },
    {
      id: 2,
      title: 'Рабочее место',
      capacity: '1 человек',
      price: '300 ₽/час',
      description: 'Комфортное место с эргономичным креслом и быстрым интернетом',
      icon: 'Laptop'
    },
    {
      id: 3,
      title: 'Переговорная',
      capacity: '6-10 человек',
      price: '1500 ₽/час',
      description: 'Просторный зал с проектором и доской для командных встреч',
      icon: 'Presentation'
    },
    {
      id: 4,
      title: 'Тихая зона',
      capacity: '1-2 человека',
      price: '400 ₽/час',
      description: 'Изолированное пространство для концентрации на важных задачах',
      icon: 'Volume2'
    }
  ];

  const tariffs = [
    {
      name: 'Почасовой',
      price: 'от 300 ₽',
      period: 'час',
      features: ['Гибкий график', 'Оплата за время', 'Wi-Fi и кофе', 'Доступ к общим зонам']
    },
    {
      name: 'Дневной',
      price: '2000 ₽',
      period: 'день',
      features: ['8:00 - 20:00', 'Безлимитный кофе', 'Переговорная 2 часа', 'Парковка'],
      popular: true
    },
    {
      name: 'Месячный',
      price: '25000 ₽',
      period: 'месяц',
      features: ['24/7 доступ', 'Свой шкафчик', 'Приоритет в переговорных', 'Скидки партнеров']
    }
  ];

  const faqs = [
    {
      q: 'Как забронировать место?',
      a: 'Выберите дату и время в разделе "Бронирование", укажите тип пространства и заполните контактные данные. Мы свяжемся с вами для подтверждения.'
    },
    {
      q: 'Можно ли отменить бронирование?',
      a: 'Да, бесплатная отмена возможна за 24 часа до начала бронирования. При более поздней отмене взимается 50% стоимости.'
    },
    {
      q: 'Есть ли парковка?',
      a: 'Да, у нас есть бесплатная парковка для гостей коворкинга на 20 машиномест.'
    },
    {
      q: 'Какие удобства включены?',
      a: 'Бесплатный Wi-Fi, кофе и чай, принтер, доски для мозгового штурма, кухня с микроволновкой.'
    },
    {
      q: 'Работаете в выходные?',
      a: 'Да, мы работаем ежедневно с 8:00 до 22:00. Владельцы месячных абонементов имеют доступ 24/7.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">CoWork Space</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Пространства', 'Тарифы', 'Бронирование', 'О нас', 'Контакты', 'FAQ'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item === 'Главная' ? 'hero' : item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" onClick={() => scrollToSection('бронирование')}>
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              Пространство для продуктивной работы
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Уютный коворкинг с комфортной атмосферой для работы, встреч и консультаций. 
              Выберите удобное пространство и забронируйте онлайн.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('бронирование')}>
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать место
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('тарифы')}>
                Посмотреть тарифы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="пространства" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Наши пространства</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящее место для вашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaces.map((space) => (
              <Card key={space.id} className="hover:shadow-lg transition-shadow animate-scale-in border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={space.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{space.title}</CardTitle>
                  <CardDescription>{space.capacity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{space.description}</p>
                  <p className="text-2xl font-bold text-primary font-heading">{space.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тарифы" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Гибкие условия для любых задач</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, idx) => (
              <Card 
                key={idx} 
                className={`relative hover:shadow-xl transition-all ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading">{tariff.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary font-heading">{tariff.price}</span>
                    <span className="text-muted-foreground">/{tariff.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tariff.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Онлайн-бронирование</h2>
            <p className="text-muted-foreground text-lg">Выберите дату и оформите бронь за минуту</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="space">Тип пространства</Label>
                      <Select value={selectedSpace} onValueChange={setSelectedSpace} required>
                        <SelectTrigger id="space">
                          <SelectValue placeholder="Выберите пространство" />
                        </SelectTrigger>
                        <SelectContent>
                          {spaces.map((space) => (
                            <SelectItem key={space.id} value={space.title}>
                              {space.title} — {space.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Select required>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                            <SelectItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration">Длительность</Label>
                      <Select required>
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Выберите длительность" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 час</SelectItem>
                          <SelectItem value="2">2 часа</SelectItem>
                          <SelectItem value="4">4 часа</SelectItem>
                          <SelectItem value="8">Весь день</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Label className="mb-2">Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-heading font-semibold text-lg">Контактные данные</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий (необязательно)</Label>
                    <Textarea id="comment" placeholder="Особые пожелания или вопросы" rows={3} />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Check" className="mr-2" size={20} />
                  Забронировать
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="о нас" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">О коворкинге</h2>
            <Card>
              <CardContent className="p-8 space-y-4 text-muted-foreground">
                <p>
                  CoWork Space — это современное пространство для комфортной и продуктивной работы в центре города. 
                  Мы создали атмосферу, где каждый находит вдохновение и может полностью сосредоточиться на своих задачах.
                </p>
                <p>
                  Наш коворкинг оборудован всем необходимым: быстрый интернет, эргономичная мебель, 
                  тихие зоны для концентрации и просторные переговорные для встреч. Всегда свежий кофе 
                  и приятная атмосфера — всё для вашего комфорта.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-heading">200+</div>
                    <div className="text-sm">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-heading">24/7</div>
                    <div className="text-sm">Доступ для абонентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-heading">500м²</div>
                    <div className="text-sm">Площадь пространства</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@coworkspace.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Часы работы</div>
                      <div className="text-sm text-muted-foreground">Ежедневно: 8:00 - 22:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Быстрая связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success('Сообщение отправлено!'); }}>
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea id="contact-message" placeholder="Ваш вопрос" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">Частые вопросы</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-heading mb-2">CoWork Space</h3>
              <p className="text-sm opacity-80">Пространство для продуктивной работы</p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 CoWork Space. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
