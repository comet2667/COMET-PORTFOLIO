import './About.scss';
import profile from '../../assets/profile.png'
import { Book, Calendar, Mailbox, MapFill, PersonCircle, PhoneFill } from 'react-bootstrap-icons';

function About() {
    return (
        <>
            <div className='about__container'>
                <h1>박혜성 웹 개발자 포트폴리오</h1>
                <div className='about__content'>
                    <p>안녕하세요, 백엔드 개발자를 지망하고</p>
                    <p>풀스택 개발자의 시각을 지향하는 <b>박혜성</b>입니다.</p>
                </div>
            </div>
            <div className='profile__container'>
                <h1>About</h1>
                <div className='profile__content'>
                    <img src={profile} />
                    <div>
                        <div className='profile__item'>
                            <div className='profile__item__box'>
                                <div><PersonCircle/> 이름</div>
                            </div>
                            <div className='profile__item__box'>
                                <div><Calendar/> 생년월일</div>
                            </div>
                            <div className='profile__item__box'>
                                <div><MapFill/> 주소지</div>
                            </div>
                        </div>
                        <div className='profile__item'>
                            <div className='profile__item__box'>
                                <div><PhoneFill/> 연락처</div>
                            </div>
                            <div className='profile__item__box'>
                                <div><Mailbox/> 이메일</div>
                            </div>
                            <div className='profile__item__box'>
                                <div><Book/> 학력</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;