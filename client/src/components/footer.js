import '../css/footer.css';
import vibericon from '../photos/viber-icon.png'
import tgicon from '../photos/tg-icon.png'


const footer = () => {

    return(
        <div className="footer">
            <div className='column1'>
                <h3>Будьте першими</h3>
                <p>хто дізнається про знижки
                та новинки</p>
                <input type="text"  placeholder='  E-mail' className='input-email'/>
                <button className='sub-button'>Підписатись</button>
            </div>
            <div className='column2'>
                <h3>Співпраця</h3>
                <p>ОПТ</p>
                <p>Дропшипінг</p>
                <p>Партнерам</p>
            </div>
            <div className='column3'>
                <h3>Cервіс</h3>
                <p>Оплата</p>
                <p>Доставка</p>
                <p>Повернення</p>
            </div>
            <div className='column4'>
                <h3>Про нас</h3>
                <p>Режим роботи:<br/>
                пн-нд: 10:00-21:00</p>
                <p>Контактна інформація: 
                <a href="tel:+380739538582" className="phone-num"> 073-953-85-82</a></p>
                <p>pro100.opt2023@gmail.com</p>
            </div>
            <div className='column5'>
                <img src= {vibericon} alt="viber-icon" className='viber-icon'/>
                <img src= {tgicon} alt="tg-icon" className='tg-icon'/>
            </div>
        </div>
    )
}

export default footer