import Header from "../components/Header";
import Footer from '../components/Footer';
import bannerImage from '/public/BannerImage.png';
import ganoCenter from '/public/ganodom.jpg';

function AboutUs(){
    return(
        <>
           <Header/>
           <div className="w-full h-auto pt-40 bg-cover flex flex-col justify-center items-center gap-10 p-20">
            <h1 className="text-5xl text-black">Gano Excel: Мировой лидер в области здоровья и благополучия</h1>
            <p className="text-3xl text-black text-center">
                <b>Gano Excel</b> – это международная компания, специализирующаяся на производстве и <br />
                распространении продуктов на основе гриба ганодермы (лингжи). <br />
                С момента своего основания в 1995 году в Малайзии, Gano Excel стала символом качества, <br />
                инноваций и заботы о здоровье миллионов людей по всему миру.
            </p>
            <h2 className="text-4xl font-bold">Что такое ганодерма?</h2>
            <p className="text-3xl text-center">
            Ганодерма, также известная как гриб Рейши или "гриб бессмертия", <br />
            веками используется в восточной медицине благодаря своим уникальным <br />
            целебным свойствам. <br />
            Этот гриб содержит:
            </p>
            <ul className="text-3xl">
                <li><b>Полисахариды</b>, которые поддерживают иммунную систему.</li>
                <li><b>Антиоксиданты</b>, замедляющие старение.</li>
                <li><b>Адаптогены</b>, способствующие стрессоустойчивости.</li>
            </ul>
            <img src={bannerImage} alt="bannerImage" />

            <h3 className="text-5xl font-bold">Наша миссия</h3>
            <p className="text-3xl text-center">
                Мы стремимся улучшать качество жизни людей, предлагая натуральные, <br />
                высокоэффективные продукты, которые соединяют древние традиции и современные технологии.
            </p>
            <h4 className="text-4xl font-bold">Почему выбирают Gano Excel?</h4>
            <ul className="text-3xl">
                <li><b>Глобальное присутствие</b>: Компания представлена более чем в 65 странах.</li>
                <li><b>Сертифицированное качество</b>: Продукция сертифицирована такими организациями, как USDA Organic, ISO, Halal и Kosher.</li>
                <li><b>Инновационные технологии</b>: Для выращивания и обработки ганодермы используются самые современные методы.</li>
            </ul>
            <h5 className="text-4xl  font-bold">Наши достижения:</h5>
                <ul className="text-3xl">
                    <li>Более 30 лет опыта в производстве органических продуктов.</li>
                    <li>Миллионы довольных клиентов по всему миру.</li>
                    <li>Собственные фермы и производственные мощности в Малайзии.</li>
                </ul>
            <img src={ganoCenter} alt="gano house" />

            <h6 className="text-4xl font-bold">Социальная ответственность</h6>
            <p className="text-3xl text-center">
                Gano Excel активно поддерживает инициативы по сохранению окружающей <br />
                среды и улучшению качества жизни местных сообществ.
            </p>
           </div>
           <Footer/>
        </>
    )
}


export default AboutUs;