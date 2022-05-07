export default function SectionLayout({cmp1, cmp2}) {
    return (
        <div className="section-layout">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">{cmp1}</div>
                    <div className="col-12 col-md-6">{cmp2}</div>
                </div>
            </div>
        </div>
    );
}