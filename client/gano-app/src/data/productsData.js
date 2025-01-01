// import coffeImage from '/public/coffee.jpg';
import igarcino from '/public/igarcino.png';
import reishiImage from '/public/reishi.png';
import cordyGold from '/public/cordy-gold.png';
import exeliumGold from '/public/exelium.png';
import igano from '/public/igano.png';
import redGano from '/public/RedGano.png';
import dentalGel from '/public/DentalGel.png';
import isakano from '/public/isakano.png';
import iRoyal from '/public/iroyale.png';

export const Product = [
    {
        id: 1,
        name: "Reishi Gold",
        image: reishiImage,
        composition: "250 мг экстракта Ганодермы Лусидум",
        packaging: "100 капсул",
        application: "1-2 капсулы два раза в день. До 6 капсул в день для оптимального эффекта.",
        categoria: 'hot',
        benefits: [
            "Укрепляет иммунную систему организма",
            "Выводит токсины",
            "Уменьшает содержание холестерина и жиров",
            "Регулирует уровень артериального давления",
            "Регулирует уровень сахара в крови",
            "Обладает противоаллергическим эффектом",
            "Улучшает кровообращение"
        ]
    },
    {
        id: 2,
        name: "Excellium Gold",
        image: exeliumGold,
        composition: "450 мг экстракта мицелия гриба Ganoderma Lucidum",
        packaging: "100 капсул",
        application: "1-2 капсулы два раза в день. До 6 капсул в день для оптимального эффекта.",
        categoria: 'hot',
        benefits: [
            "Помогает в развитии интеллектуальных способностей",
            "Улучшает деятельность мозга",
            "Обеспечивает высокое содержание кислорода всему телу и нервной системе",
            "Укрепляет иммунную систему организма",
            "Улучшает метаболизм",
            "Устраняет токсины",
            "Улучшает состояние кожи лица"
        ]
    },
    {
        id: 3,
        name: "Cordy Gold",
        image: cordyGold,
        composition: "500 мг экстракта кордицепса синенсиса",
        packaging: "100 капсул",
        application: "1-2 капсулы два раза в день. Для детей дозу снизить вдвое.",
        categoria: 'hot',
        benefits: [
            "Укрепляет иммунную систему организма",
            "Улучшает функцию почек",
            "Улучшает функцию легких",
            "Придает энергию, жизненность и выносливость",
            "Улучшает кровообращение",
            "Снижает риски преждевременного старения (Антиэйджинг)"
        ]
    },
    {
        id: 4,
        name: "iGano Plus",
        image: igano,
        composition: "500 мг экстракта Ganoderma lucidum",
        packaging: "100 капсул",
        application: "1-2 капсулы два раза в день.",
        categoria: 'hot',
        benefits: [
            "Укрепляет иммунную систему",
            "Улучшает кровообращение",
            "Снижает уровень холестерина в крови",
            "Балансирует уровень сахара",
            "Устраняет токсины"
        ]
    },
    {
        id: 5,
        name: "iSakanno",
        image: isakano,
        composition: "332,5 мг Тонгкат Али (Eurycoma longifolia jack) и 17,5 мг Ganoderma lucidum",
        packaging: "100 капсул",
        application: "2 капсулы два раза в день.",
        categoria: 'hot',
        benefits: [
            "Укрепляет иммунную систему",
            "Увеличивает энергию, выносливость",
            "Улучшает микроциркуляцию",
            "Улучшает мужскую репродуктивную систему",
            "Улучшает эректильную функцию",
            "Укрепляет нервную систему",
            "Снимает усталость"
        ]
    },
    {
        id: 6,
        name: "iGarcino",
        image: igarcino,
        composition: "315 мг гарцинии, 112,5 мг тамаринда, 22,5 мг экстракта Ganoderma lucidum",
        packaging: "120 капсул",
        application: "3-4 капсулы два раза в день.",
        categoria: 'hot',
        benefits: [
            "Помогает снизить лишний вес",
            "Уменьшает чрезмерный уровень триглицеридов и холестерина",
            "Увеличивает энергичность",
            "Улучшает метаболизм",
            "Укрепляет пищеварительную систему",
            "Контролирует уровень сахара в крови",
            "Контролирует аппетит"
        ]
    },
    {
        id:7,
        name: "iRoyale",
        image: iRoyal,
        composition: "Королевское желе, экстракт мицелия Ganoderma lucidum",
        packaging: "50 капсул",
        application: "1-2 капсулы два раза в день, натощак или перед сном.",
        categoria: 'hot',
        benefits: [
            "Повышает жизнеспособность и выносливость",
            "Повышает иммунитет",
            "Улучшает метаболизм",
            "Повышает регенерацию клеток и тканей",
            "Улучшает качество сна",
            "Поддерживает женский гормональный баланс",
            "Поддерживает кожу молодой и красивой"
        ]
    },
    {
        id: 8,
        name: "iSpring Dental Gel",
        image: dentalGel,
        composition: "Экстракт Ganoderma lucidum",
        packaging: "150 гр",
        application: "Использовать как зубную пасту дважды в день.",
        categoria: 'hot',
        benefits: [
            "Удаляет остатки еды и налет",
            "Укрепляет зубную эмаль и десны",
            "Защищает от инфекций",
            "Препятствует росту бактерий в полости рта",
            "Уменьшает воспаление десен"
        ]
    },
    {
        id: 9,
        name: "Red Gano",
        image: redGano,
        composition: "Чай Rooibos и экстракт Ganoderma lucidum",
        packaging: "20 пакетиков",
        application: "Залить кипящей водой и дать настояться 2-3 минуты.",
        categoria: 'hot',
        benefits: [
            "Укрепляет иммунитет",
            "Устраняет токсины из организма",
            "Повышает кровообращение и метаболизм",
            "Снимает раздражительность, головную боль и бессонницу",
            "Улучшает качество сна"
        ]
    }
];
