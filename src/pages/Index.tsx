import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const photos = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/9b865712-0d15-440b-92ae-60bff66c686b.jpg",
      title: "Наша история начинается"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/9baf5950-33d1-4e83-a43d-1f70151773a6/files/521cf895-04c5-4f77-bfde-2b9bf308e8a8.jpg",
      title: "Первая встреча"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/9baf5950-33d1-4e83-a43d-1f70151773a6/files/476f10c1-4632-4dd7-8034-e75b831dc8e8.jpg",
      title: "Незабываемые моменты"
    }
  ];

  const letters = [
    {
      id: 1,
      date: "14 февраля 2024",
      title: "Моему любимому Александру",
      text: "Ты изменил мою жизнь с того самого дня, когда мы встретились. Каждое утро я просыпаюсь с мыслью о тебе, и каждый вечер засыпаю с благодарностью за то, что ты есть в моей жизни. Твоя улыбка освещает мои самые темные дни.",
      author: "Виктория"
    },
    {
      id: 2,
      date: "8 марта 2024",
      title: "Моей единственной Виктории",
      text: "Ты - самое прекрасное, что случилось со мной. Твоя доброта, ум и красота поражают меня каждый день. Я обещаю всегда быть рядом, в радости и в печали, и делать все возможное, чтобы ты была счастлива.",
      author: "Александр"
    },
    {
      id: 3,
      date: "1 июня 2024",
      title: "О нашей любви",
      text: "Наша любовь - это не просто чувство, это целая вселенная, в которой мы создаем свою историю. Каждый день с тобой - это новая страница нашей книги любви, наполненная нежностью, заботой и безграничной привязанностью.",
      author: "Виктория"
    }
  ];

  const dreams = [
    {
      id: 1,
      icon: "Home",
      title: "Наш дом",
      description: "Построить уютный дом, где будет царить любовь и тепло"
    },
    {
      id: 2,
      icon: "Heart",
      title: "Семья",
      description: "Создать крепкую семью и воспитать детей в любви"
    },
    {
      id: 3,
      icon: "Plane",
      title: "Путешествия",
      description: "Объездить весь мир вместе, создавая незабываемые воспоминания"
    },
    {
      id: 4,
      icon: "Star",
      title: "Мечты сбываются",
      description: "Поддерживать друг друга в достижении всех целей"
    },
    {
      id: 5,
      icon: "Users",
      title: "Вместе навсегда",
      description: "Пронести нашу любовь через всю жизнь"
    },
    {
      id: 6,
      icon: "Sparkles",
      title: "Каждый день как праздник",
      description: "Находить радость в простых моментах, проведенных вместе"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${photos[0].url})`,
            filter: 'blur(8px)'
          }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/80 backdrop-blur">
            💕 Наша история любви
          </Badge>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-primary-foreground">
            Виктория & Александр
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Когда два сердца бьются в унисон, рождается настоящая любовь
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-5xl font-bold mb-4">Галерея наших моментов</h2>
          <p className="text-xl text-muted-foreground">Каждое фото хранит частичку нашего счастья</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="overflow-hidden group cursor-pointer animate-scale-in hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 mx-0">
                  <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-secondary-foreground" />
            <h2 className="text-5xl font-bold mb-4">Любовные письма</h2>
            <p className="text-xl text-muted-foreground">Слова из самого сердца</p>
          </div>

          <div className="space-y-8">
            {letters.map((letter, index) => (
              <Card 
                key={letter.id}
                className="p-8 animate-fade-in hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{letter.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-foreground">{letter.title}</h3>
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                  {letter.text}
                </p>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-sm font-medium">С любовью,</span>
                  <Badge variant="secondary">{letter.author}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-5xl font-bold mb-4">Наши мечты и планы</h2>
          <p className="text-xl text-muted-foreground">Будущее, которое мы создаем вместе</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream, index) => (
            <Card 
              key={dream.id}
              className="p-8 text-center hover:bg-accent transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                <Icon name={dream.icon} size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{dream.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{dream.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-muted/20">
        <div className="text-center px-4 animate-fade-in">
          <Icon name="Heart" size={56} className="mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">Наша любовь - это навсегда</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Вместе мы сильнее, вместе мы счастливее, вместе мы - одно целое
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;