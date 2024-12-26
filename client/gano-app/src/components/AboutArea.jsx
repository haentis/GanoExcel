import imune from '/public/imunesystem.jpg';
import skinPhoto from '/public/skin.jpg';
import stress from '/public/stress.jpg';
import heart from '/public/heart.jpg';


function AboutArea(){
    return(
        <>
        <div className="w-full h-auto border-solid py-10 bg-gray-50">
            <p className="text-3xl font-bold text-center mb-8">ПОЛЬЗА ГАНОДЕРМЫ</p>
            <div className="w-[90%] mx-auto flex flex-wrap justify-center gap-6">
                <div className="w-[25%] max-w-xs bg-white h-auto rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    <img src={imune} alt="Иммунная система" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <p className="text-xl font-semibold text-gray-800 mb-2">Поддержка иммунной системы</p>
                        <p className="text-base text-gray-600 leading-relaxed">
                        Усиливает работу иммунитета благодаря содержанию бета-глюканов и тритерпеноидов. 
                        <br />Помогает организму бороться с вирусами, бактериями и воспалениями.
                        </p>
                    </div>  
                </div>
                <div className="w-[25%] max-w-xs min-[200px]: bg-white h-auto rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    <img src={skinPhoto} alt="Иммунная система" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <p className="text-xl font-semibold text-gray-800 mb-2">Польза для кожи</p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Улучшает состояние кожи, благодаря регуляции процессов воспаления и антиоксидантным свойствам.
                        </p>
                    </div>  
                </div>
                <div className="w-[25%] max-w-xs bg-white h-auto rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    <img src={stress} alt="Иммунная система" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <p className="text-xl font-semibold text-gray-800 mb-2">Снижение уровня стресса и улучшение сна</p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Ганодерма известна как адаптоген, который помогает организму справляться со стрессом. <br />
                            Способствует расслаблению и улучшению качества сна.
                        </p>
                    </div>  
                </div>
                <div className="w-[25%] max-w-xs bg-white h-auto rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    <img src={heart} alt="Иммунная система" className="w-full h-48 object-cover" />
                    <div className="p-5">
                        <p className="text-xl font-semibold text-gray-800 mb-2">Польза для сердечно-сосудистой системы</p>
                        <p className="text-base text-gray-600 leading-relaxed">
                        Снижает уровень плохого холестерина ЛПНП.  <br />
                        Улучшает кровообращение и может регулировать кровяное давление.
                        </p>
                    </div>  
                </div>
            </div>
        </div>

        </>
    )
}


export default AboutArea;