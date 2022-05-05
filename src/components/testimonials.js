import Testimonial from './testimonial';
import Icon1 from '../icons/profile1.svg';
import Icon2 from '../icons/profile2.svg';
import Icon3 from '../icons/profile3.svg';

export default function Testimonials() {


    return (
        <div className="testimonials container">
            <div className="testimonials__box1">
                <Testimonial userImg={Icon1} name='Alyssa' desc='When I needed advice, I knew where to go! Do feel I better no. But it was the thought that counts!' />
            </div>
            <div className="testimonials__box2">
                <Testimonial userImg={Icon2} name='Clark' desc='test' />
            </div>
            <div className="testimonials__box3">
                <Testimonial userImg={Icon3} name='Saulo' desc='test' />
            </div>
        </div>
    );
}