import React from 'react';
import Config from '../../config';

const mAlpha2Page: React.FC = () => {
    const siteAlias = 'malpha2';
    const site = Config.templates[siteAlias];
    const sizes = {
        xs: { width: 320, height: 480 },
        m: { width: 370, height: 710 },
    };

    const goToShop = () => {
        window.open(
            site.shopURL,
            '_blank'
        );
    };

    return (
        <>
            <div className="demo-page">
                <div className="content">
                    <div className="left">
                        <div>
                            <h1>{site.name}</h1>
                            <ul className="main-features">
                                {
                                    site.mainFeatures.map(feature => (
                                        <li>{feature}</li>
                                    ))
                                }
                            </ul>
                            <div className="buttons">
                                <button className={'btn btn-primary'} onClick={goToShop}>Buy Now</button>
                                {/* <button>Try On Your Phone</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="mockup">
                            <div className="display" style={sizes.m}>
                                <iframe src={site.demoURL} title={site.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default mAlpha2Page;