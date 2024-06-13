import Avatar from '../img/imagem.jpg'   
import SocialNetworks from './SocialNetworks' 
import "../styles/components/sidebar.sass"  
import InformationContainer from './InformationContainer'                      


 const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="robot" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download
            </a> 
    </aside>
    )
    
 }

 export default Sidebar