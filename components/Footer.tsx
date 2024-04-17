const Footer: React.FC<{ data: any }> = ({ data }) => {
    // const { phone_number, email, address } = data;
    return (
        <footer className="py-10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10823.832442277955!2d0.3544564!3d47.2956182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fd378796ad28b7%3A0x2a447583c4213f5c!2sLoire%20V%C3%A9lo%20Nature!5e0!3m2!1sen!2sfr!4v1713331029551!5m2!1sen!2sfr"
                width="800"
                height="600"
                style={{ border: 0, width: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex w-full flex-col items-center justify-center text-center pt-10 mt-5 mb-10">
                <p className="text-lg text-gray-400">{/* {phone_number} | {email} | {address} */}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center text-center pt-10 mt-5 mb-10"></div>;
        </footer>
    );
};

export default Footer;
