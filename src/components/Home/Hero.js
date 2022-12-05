import { useEffect } from 'react';
import carousel from '../../assets/images/car1.png'

function Hero() {
    // array containing image positions
    const positions = ['translateX(-0.9%', 'translateX(-18.3%)', 'translateX(-40.6%)', 'translateX(-61.7%)', 'translateX(-89.05%);']
    // console.log(images);

    useEffect(() => {
        // code to select all the images
        const images = Array.from(
            document.getElementsByClassName('image')
        );

        setInterval(() => {
            // let shuffled = positions
            //     .map(value => ({ value, sort: Math.random() }))
            //     .sort((a, b) => a.sort - b.sort)
            //     .map(({ value }) => value)

            // loop to shuffle the index of the positions array
            for (let i = positions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [positions[i], positions[j]] = [positions[j], positions[i]];
            }


            // loop to reposition each image
            for (let i = 0; i < images.length; i++) {
                images[i].style.transform = `${positions[i]}`
                // images[i].style.display = 'none'
            }

        }, 3000);

    }, []);
    return (
        <section id="hero">
            <h1>Photography is poetry & beautiful untold stories</h1>
            <p>
                Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
            </p>
            <div className="carousel flex justify-between align-center full-width">
                <div className="card"><img className='image img1' src={carousel} alt="" /></div>
                <div className="card"><img className='image img2' src={carousel} alt="" /></div>
                <div className="card"><img className='image img3' src={carousel} alt="" /></div>
                <div className="card"><img className='image img4' src={carousel} alt="" /></div>
                <div className="card"><img className='image img5' src={carousel} alt="" /></div>
            </div>
        </section>
    )
}

export default Hero