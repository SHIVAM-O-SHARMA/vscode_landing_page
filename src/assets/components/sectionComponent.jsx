import sectionimg1 from '../images/sectionimg1.png'
import sectionimg2 from '../images/sectionimg2.png'
import sectionimg3 from '../images/sectionimg3.png'
import sectionimg4 from '../images/sectionimg4.png'
import sectionimg5 from '../images/sectionimg5.png'
import sectionimg6 from '../images/sectionimg6.png'


function SectionComponent({title, description,image}){
    return (
        <div className="bg-[#0e1117] p-20 grid grid-cols-3">
         <div className='col-span-1 translate-y-24'>
            <div className="text-[#c2d0e5] font-semibold text-[29px]">
                {title}
                </div>
            <div className="text-[#a0acbe] text-[18px] pt-4">
                {description}
                </div>
         </div>
         <div className="rounded-lg shadow-lg col-span-2 px-3">
            {image && (
                <img src={image} alt="pic" />
            )}
            </div>
        </div>
    );
}

export function Section(){
    return (
        <div>
            <SectionComponent
            title={"Agent mode"}
            description={
                <>
                Tackle complex, multi-step tasks. Agent mode reads your codebase, suggests edits across files, runs terminal commands, and responds to compile or test failures — all in a loop until the job is done.
                Further refine agent mode to fit your team's workflows with VS Code extensions and Model Context Protocol (MCP) servers.
                <br />
                <a className="text-blue-400" href="#">Build with agent mode</a>
            </>
            }
            image={sectionimg1}
            />

            <SectionComponent
            title={"Next edit suggestions"}
            description={
                <>
                VS Code predicts your next move as you code. Use the Tab key to accept AI-powered suggestions right in your editor. It intelligently recommends what to change — and where — based on the edits you're already making.
               <br />
               <a className='text-blue-400' href="#">Code with AI-powered suggestions</a>
            </>
            }
            image={sectionimg2}
            />

            <SectionComponent
            title={"Code with extensions"}
            description={
                <>
                Customize VS Code with AI-powered functionality from extensions and Model Context Protocol servers to use in Chat. Or, build your own extension to power your team's unique scenarios.
                </>
            }
            image={sectionimg3}

            />
            <SectionComponent
            title={"Code in any language"}
            description={
                <>
                VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.
                </>
            }
            image={sectionimg4}/>

            <SectionComponent
            title={"Fully customizable"}
            description={
                <>
                 Customize your VS Code UI and layout so that it fits your coding style.
                 <br />
                 Color themes let you modify the colors in VS Code's user interface to suit your preferences and work environment.
                 <br />
                 Settings Sync enables you to share your user settings across your VS Code instances with the Settings Sync feature.
                 <br />
                 Profiles let you create sets of customizations and quickly switch between them or share them with others.
                </>
            }
            image={sectionimg5}/>

            <SectionComponent
            title={"Code anywhere"}
            description={
                <>
                 Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).
                 <br />
                 Built-in Source Control empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.
                 <br />
                 GitHub Codespaces provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.
                </>
            }
            image={sectionimg6}/>
        </div>
    )
}