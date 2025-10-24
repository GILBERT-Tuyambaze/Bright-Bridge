import { BookOpen, Microscope, GraduationCap, Target, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Programs() {
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);

  // form state
  const [hasPaid, setHasPaid] = useState(false);
  const [userName, setUserName] = useState(''); // applicant's name
  const [applicationCode, setApplicationCode] = useState(''); // name or code of applied file
  const [fileNameOnProof, setFileNameOnProof] = useState(''); // name shown on receipt
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [amountPaid, setAmountPaid] = useState(''); // amount paid
  const [purpose, setPurpose] = useState(''); // what for
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // submission UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isApplicationOpen = true;
  const GETFORM_ENDPOINT = 'https://getform.io/f/bvrmqnjb';

  const handleApplyClick = () => {
    if (isApplicationOpen) {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSeGiRs4JYXb3sb6jg46vfJddYvXCdBBf92-z_hn3O_xQil0fg/viewform',
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      setShowApplicationClosed(true);
    }
  };

  const closeModal = () => setShowApplicationClosed(false);

  // file preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  // AJAX submit with fetch + FormData
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // client-side validation
    if (
      !userName.trim() ||
      !applicationCode.trim() ||
      !fileNameOnProof.trim() ||
      !userEmail.trim() ||
      !userPhone.trim() ||
      !amountPaid.trim() ||
      !purpose.trim() ||
      !file
    ) {
      setSubmitError('Please fill all fields and upload a payment proof file.');
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append('user_name', userName);
      formData.append('application_code', applicationCode);
      formData.append('file_name_on_proof', fileNameOnProof);
      formData.append('user_email', userEmail);
      formData.append('user_phone', userPhone);
      formData.append('amount_paid', amountPaid);
      formData.append('purpose', purpose);
      // optional: helpful subject for the Getform email
      formData.append('_subject', 'Bright Bridge — Payment proof submission');

      // Append file under the same field name your provider expects
      formData.append('payment_proof', file, file.name);

      // Do not set Content-Type header; browser sets multipart boundary automatically
      const res = await fetch(GETFORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        // Accept header optional
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        // success — show local UI, clear inputs
        setSubmissionSuccess(true);
        setUserName('');
        setApplicationCode('');
        setFileNameOnProof('');
        setUserEmail('');
        setUserPhone('');
        setAmountPaid('');
        setPurpose('');
        setFile(null);
        setPreview(null);
        setHasPaid(false);
      } else {
        // provider returned non-OK (examine response text for details)
        const text = await res.text().catch(() => `status ${res.status}`);
        setSubmitError(`Submission failed: ${text}`);
      }
    } catch (err: unknown) {
      // network / CORS / other error
      setSubmitError(err instanceof Error ? err.message : 'Network error while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // UI: minimal programs data (kept from previous)
  const preparatoryPrograms = [
    {
      title: 'BRIGHT BRIDGE PREP',
      description:
        'Through the Bright Bridge Prep program, we offer personalized guidance to scholars, expose them to opportunities, and help them get ready for higher education.',
      goal:
        'We help students apply and study to universities abroad in top destinations such as the United States, Canada, United Kingdom, Germany, Australia, and several others.',
      icon: GraduationCap,
      features: [
        'University Applications',
        'English Writing/Reading Workshops',
        'SAT/ACT Preparation',
        'Career Pathway Exploration',
      ],
      color: 'bg-gradient-to-br from-[#3CB043] to-[#0B2148]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Application Closed Modal */}
      {showApplicationClosed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#0B2148]">Application Status</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-[#0B2148]">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Applications are currently closed. Please check back later for future enrollment opportunities.
              </p>
              <button onClick={closeModal} className="bg-[#0B2148] text-[#D4AF37] hover:bg-[#0B2148]/90 font-bold px-6 py-3 rounded-xl transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B2148] to-[#3CB043] text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 animate-fade-in">Programs</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-slide-up leading-relaxed">
            At Bright Bridge Academy, we offer diverse, future-focused programs designed to nurture creativity, critical thinking, and leadership.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {preparatoryPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover border border-gray-100 mb-12">
                <div className={`${program.color} p-12 text-white`}>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        <Icon className="h-12 w-12 text-[#D4AF37] mr-4" />
                        <h3 className="text-4xl font-bold uppercase">{program.title}</h3>
                      </div>
                      <p className="text-xl mb-6">{program.description}</p>
                    </div>
                    <div className="bg-white/10 p-8 rounded-2xl md:ml-8 min-w-[300px]">
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">Key Features</h4>
                      <ul className="space-y-3">
                        {program.features.map((f, i) => (
                          <li key={i} className="flex items-center text-lg"><div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-3" />{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fees + Payment proof (AJAX submit) */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-6">Program Fees</h2>
          <p className="text-2xl text-[#3CB043] font-semibold mb-4 animate-pulse">25,000 RWF <span className="text-gray-600 text-lg font-normal">per month</span></p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            This small monthly contribution helps keep the program alive by covering essential costs and other basic needs.
          </p>

          <button onClick={() => setHasPaid(!hasPaid)} className={`mb-8 px-6 py-3 rounded-xl font-bold ${hasPaid ? 'bg-[#3CB043] text-white' : 'bg-[#D4AF37] text-[#0B2148]'} hover:scale-105 transition-transform duration-300`}>
            {hasPaid ? 'Payment Marked ✅' : 'I Have Paid'}
          </button>

          {/* AJAX form: onSubmit => handlePaymentSubmit */}
          {hasPaid && !submissionSuccess && (
            <motion.form
              onSubmit={handlePaymentSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#0B2148] text-center">Submit Payment Proof</h3>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your full name" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Application name / code</label>
                <input type="text" value={applicationCode} onChange={(e) => setApplicationCode(e.target.value)} placeholder="Name or application code" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name shown on payment proof</label>
                <input type="text" value={fileNameOnProof} onChange={(e) => setFileNameOnProof(e.target.value)} placeholder="Name on receipt" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter your email" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} placeholder="Enter your phone" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Amount Paid</label>
                  <input type="text" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} placeholder="e.g. 25,000 RWF" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">What is this payment for?</label>
                  <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="e.g. Monthly fee - April" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3CB043]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Payment Proof</label>
                <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} required className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#3CB043] file:text-white hover:file:bg-[#2A7A2F]" />
                <p className="text-sm text-gray-500 mt-1">Accepted: JPG, JPEG, PNG, PDF</p>
                {preview && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                    <img src={preview} alt="Payment proof preview" className="w-full rounded-xl shadow-md border border-gray-200" />
                  </motion.div>
                )}
              </div>

              {submitError && <p className="text-sm text-red-600">{submitError}</p>}

              <button type="submit" disabled={isSubmitting} className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-wait' : 'bg-[#0B2148] hover:bg-[#142E5E]'} text-[#D4AF37] font-bold px-6 py-3 rounded-xl`}>
                {isSubmitting ? 'Submitting…' : 'Submit Proof'}
              </button>
            </motion.form>
          )}

          {/* success UI after AJAX success */}
          {submissionSuccess && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto p-8 bg-green-100 border border-green-500 rounded-2xl text-center shadow-lg space-y-4">
              <h3 className="text-2xl font-bold text-green-800">Payment Proof Submitted!</h3>
              <p className="text-lg text-green-700">
                Thank you, <span className="font-semibold">{userName || 'applicant'}</span>. We received your proof and will verify it shortly.
              </p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => { setSubmissionSuccess(false); }} className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition-all duration-300">
                  Submit Another
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#3CB043] via-[#0B2148] to-[#D4AF37] p-12 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">Join Bright Bridge Academy and discover programs that will unlock your potential and prepare you for a bright future.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleApplyClick} className="bg-[#D4AF37] text-[#0B2148] hover:bg-white hover:text-[#0B2148] font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
