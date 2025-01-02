// pages/ressource/article2/index.tsx
import React from 'react';
import Link from 'next/link';

const Article2 = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      {/* Header Section with Title */}
      <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          A Call to Denounce and Combat It
        </h1>
        <p className="text-lg text-white opacity-80 animate__animated animate__fadeIn animate__delay-2s">
          Facing the challenges of injustice and corruption with courage and collective action.
        </p>
      </div>

      {/* Article Content */}
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-lg text-white mb-6">
            Around the world, corruption and injustice continue to erode trust in our systems, undermine equality, and perpetuate suffering. Whether it’s financial misconduct, abuses of power, or systemic inequality, the consequences are felt by millions. But the question remains: what can we, as individuals and communities, do to denounce and combat these issues effectively?
          </p>
        </section>

        {/* Identifying the Problem Section */}
        <section className="animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-3xl font-semibold text-white mb-4">Understanding the Roots of Corruption</h2>
          <p className="text-lg text-white mb-6">
            Corruption thrives where accountability is absent. It often starts small—an unchecked privilege, a compromised standard—and grows into a systemic issue. Beyond individual acts, corruption exists within the frameworks of societies, institutions, and governments, making it harder to dismantle. 
          </p>
          <p className="text-lg text-white mb-6">
            A lack of transparency, unequal access to justice, and poor governance fuel the problem. This is evident in systems where power is concentrated in the hands of a few, leaving the majority without recourse. 
          </p>
        </section>

        {/* Stories of Change Section */}
        <section className="animate__animated animate__fadeIn animate__delay-5s">
          <h2 className="text-3xl font-semibold text-white mb-4">Inspiring Stories of Change</h2>
          <p className="text-lg text-white mb-6">
            While the problem is vast, there are countless examples of communities and individuals taking a stand. One such story comes from <span className="font-bold text-blue-400">Kenya</span>, where grassroots organizations have utilized digital platforms to report bribery and hold officials accountable. The platform <Link href="https://www.ipaidabribe.or.ke/" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">I Paid a Bribe</Link> has empowered citizens to speak up, creating a ripple effect of awareness and action.
          </p>
          <p className="text-lg text-white mb-6">
            Another example is the <span className="font-bold text-blue-400">#MeToo movement</span>, which highlighted systemic abuse across industries, leading to significant legal reforms and heightened accountability for perpetrators.
          </p>
        </section>

        {/* Role of Technology and Collective Action Section */}
        <section className="animate__animated animate__fadeIn animate__delay-6s">
          <h2 className="text-3xl font-semibold text-white mb-4">The Role of Technology and Collective Action</h2>
          <p className="text-lg text-white mb-6">
            Technology has become a powerful weapon in the fight against corruption. Social media platforms enable whistleblowers to share their stories, while blockchain technology is being explored to create secure, tamper-proof records of transactions in public and private sectors.
          </p>
          <p className="text-lg text-white mb-6">
            However, technology alone is not enough. Collective action—communities coming together to demand transparency, fairness, and justice—is crucial. Through education and awareness campaigns, people can better understand their rights and the tools available to challenge injustice.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="animate__animated animate__fadeIn animate__delay-7s">
          <h2 className="text-3xl font-semibold text-white mb-4">Answering the Call</h2>
          <p className="text-lg text-white mb-6">
            The fight against corruption and injustice is not easy, but it is necessary. By standing together, advocating for stronger systems, and holding those in power accountable, we can create meaningful change. 
          </p>
          <p className="text-lg text-white mb-6">
            It starts with small steps: speaking up, supporting organizations that fight for justice, and educating ourselves and others. Together, we can build a fairer, more transparent world.
          </p>
        </section>

        {/* Back to Articles Link */}
        <div className="flex justify-between mt-12">
          <Link href="/resources" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article2;
