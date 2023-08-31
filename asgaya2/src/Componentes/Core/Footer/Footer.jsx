import '../Footer/Footer.css'
import imgLogo from '../../../Assets/LOGOTIPOlogo-1.svg'
import Button from '../../Shared/Button/button'

const Footer = ()=> {
    return (
        <footer className='footer'>
            <div className='logo'>
                <img src={imgLogo} alt="logo-asgaya" className="imgLogo"/>
            </div>
            <div className='enlaces'>
                <div className='bloque empresa'>
                    <p className='titulo'>Empresa</p>
                    <p>Quienes somos</p>
                    <p>Contacto</p>
                    <p>Blog</p>
                </div>
                <div className='bloque legal'>
                    <p className='titulo'>Legal</p>
                    <p>Términos y condiciones</p>
                    <p>Política de privacidad</p>
                    <p>Política de cookies</p>
                    <p>Aviso legal</p>
                </div>
                <div className='bloque newsletter'>
                    <p className='titulo'>Suscríbete a nuestra Newsletter!</p>
                    <form className='suscribe'>
                        <input type="text" id="email" name="email" placeholder="Email" className='input-mail'/>
                        <Button text="Enviar" value="Enviar" type="submit"/>
                    </form>
                    <div className='div-checkbox'>
                        <input type='checkbox' className='checkbox'></input>
                        <p className='acepto'>Acepto la política de privacidad y recibir las comunicaciones comerciales de Asgaya. Datos tratados para el envío de comunicaciones comerciales personalizadas a tus gustos e intereses. Puedes ejercer los derechos de acceso, rectificación, supresión, oposición y otros.</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer 