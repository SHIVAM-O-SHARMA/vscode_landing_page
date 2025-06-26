import cardimg from '../images/cardimage.png';
import cardimg1 from '../images/cardimage1.png';
import cardimg2 from '../images/cardimage2.png';

function Card({title, description, image}){
    return (
        <div className="bg-[#161a1f] w-90 h-85 translate-x-8 px-7 py-7 rounded-md border border-[#303338] hover:border-gray-700 transition-colors duration-200">
         <div className="text-[#c2d0e5] font-semibold text-[19px]">
            {title}
         </div>
         <div className="text-[#9eb0d1] text-[15px]">
            {description}
         </div>
         <div className="rounded-md shadow-md p-4">
            {image &&(
                <img src={image} alt="image" />
            )}
         </div>
        </div>
    );
}

export function Cardsection(){
    return(
        <div className='grid grid-cols-3 mx-18 '>    
            <Card
            title={'Any model for any team'}
            description={"Use AI models like Claude Sonnet out of the box, or bring your own key to access models from Azure, Anthropic, Google, Ollama, OpenAI, and OpenRouter."}
            image={cardimg}
            />
            <Card
            title={'An expert on your codebase'}
            description={"Your codebase is indexed locally and remotely (on GitHub) to understand what's relevant, enabling fast, context-aware interactions."}
            image={cardimg1}
            />
            <Card
            title={'AI that works the way your team does'}
            description={'Personalize interactions using custom instructions and reusable prompt files tailored to your workflows, tools, and projects.'}
            image={cardimg2}/>
        </div>
    )
}