import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        alert(`Submitted your case: ${data.subject}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4 py-16">
            <div className="w-full max-w-2xl p-10 bg-white/50 backdrop-blur-md border border-green-200 rounded-3xl shadow-xl transition-all duration-500">
                <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Contact Us</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-green-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-4 focus:ring-green-400 focus:outline-none bg-white shadow placeholder-gray-500"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-semibold text-green-700 mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-4 focus:ring-green-400 focus:outline-none bg-white shadow placeholder-gray-500"
                            {...register("subject", {
                                required: "Subject is required",
                                minLength: {
                                    value: 10,
                                    message: "Subject must be at least 10 characters",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Subject must be at most 30 characters",
                                },
                            })}
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold text-green-700 mb-1">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 rounded-xl border border-green-300 resize-none focus:ring-4 focus:ring-green-400 focus:outline-none bg-white shadow placeholder-gray-500"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}






















// import './Contact.css';
// import {useForm} from "react-hook-form";
//
// type FormData = {
//     email: string;
//     subject: string;
//     message: string;
// }
//
// export function Contact() {
//
//     const {register, handleSubmit,formState: {errors}} = useForm<FormData>();
//
//     const onSubmit = (data: FormData) => {
//         console.log('Form data submitted:', data);
//         alert(`Submitted your case: ${data.subject}`);
//     }
//
//
//     return (
//        <div className="form-container">
//            <h2>Contact Us</h2>
//            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//                <div className="form-group">
//                    <label>Email: </label>
//                    <input type="email"{...register('email',{required: 'Email is required',pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format'}})}/>
//                    {errors.email ? <span className="error">{errors.email.message}</span>:''}
//                </div>
//
//                <div className="form-group">
//                    <label>Subject: </label>
//                    <input type="text"{...register('subject', {required: 'Subject is required',pattern: {value: /^{{10},{30}$/, message: 'Subject must be ' + 'in between 10 and 30 characters'}})}/>
//                    {errors.subject ? <span className="error">{errors.subject.message}</span>:''}
//                </div>
//
//                <div className="form-group">
//                    <label>Message: </label>
//                    <textarea rows={5}{...register("message", {required: true })}/>
//                    {errors.message ? <span className="error">{errors.message.message}</span>:''}
//                </div>
//
//                <button type="submit" className="submit-btn">Submit</button>
//            </form>
//        </div>
//     );
// }