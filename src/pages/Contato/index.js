function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Veja nossa localização no mapa abaixo:</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7472.465020612425!2d-47.39841092229005!3d-20.537665500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6227ac02f77%3A0x977eed5af75dd7a2!2sUni-FACEF%20University%20Center%20Mun.%20Franca%2C%20Unit%20II!5e0!3m2!1sen!2sbr!4v1745676828279!5m2!1sen!2sbr" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps Location">
            </iframe>
        </div>
    );
}

export default Contato;