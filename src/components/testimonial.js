
export default function Tesimonial({userImg, name, desc}) {
    return (
        <div className="testimonial">
            <div className="testimonial__container container">
                <div className="row">
                    <div className="col-12">
                        <img src={userImg} alt='Avatar' />
                    </div>
                    <div className="col-12">
                        <div className="testimonial__container__name">{name}</div>
                        <div className="testimonial__container__desc">{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}