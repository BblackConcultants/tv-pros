'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../actions/sendEmail';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-20 bg-brand-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      <div className="max-w-3xl mx-auto container-padding relative">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl text-center text-brand-black mb-4 text-shadow">
          Book a Repair
        </h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and we'll get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
              )}
            </div>

            <div>
              <label htmlFor="tvBrand" className="block text-sm font-medium text-gray-700 mb-1">
                TV Brand *
              </label>
              <select
                id="tvBrand"
                {...register('tvBrand', { required: 'TV brand is required' })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
              >
                <option value="">Select TV Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Hisense">Hisense</option>
                <option value="TCL">TCL</option>
                <option value="Skyworth">Skyworth</option>
                <option value="Sinotec">Sinotec</option>
                <option value="Sony">Sony</option>
                <option value="Philips">Philips</option>
                <option value="Telefunken">Telefunken</option>
                <option value="JVC">JVC</option>
                <option value="Sansui">Sansui</option>
                <option value="Orion">Orion</option>
                <option value="Other">Other</option>
              </select>
              {errors.tvBrand && (
                <p className="text-red-500 text-sm mt-1">{errors.tvBrand.message as string}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
              Issue Description *
            </label>
            <textarea
              id="issue"
              {...register('issue', { required: 'Issue description is required' })}
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
            />
            {errors.issue && (
              <p className="text-red-500 text-sm mt-1">{errors.issue.message as string}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location/Address *
            </label>
            <textarea
              id="location"
              {...register('location', { required: 'Location is required' })}
              rows={2}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message as string}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto btn-primary disabled:opacity-50 px-12"
            >
              {isSubmitting ? 'Submitting...' : 'Book Repair'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 text-green-600 text-center font-medium p-4 rounded-md">
              Thank you! We'll contact you shortly to confirm your booking.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 text-red-600 text-center font-medium p-4 rounded-md">
              Sorry, something went wrong. Please try again or contact us directly.
            </div>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}
