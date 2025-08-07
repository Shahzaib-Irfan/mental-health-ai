"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  X,
  Menu,
  ArrowRight,
  Star,
  BookOpen,
  TrendingUp,
  UserCheck,
  Zap,
  Shield,
  MessageCircle,
  BarChart3,
  Clock,
  CheckCircle,
  Lock,
  Users,
  FileText,
  Calendar,
  Globe,
  Heart,
} from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex justify-center items-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-gray-900">
                MindBuddy
              </span>
            </div>

            <div className="hidden md:flex items-center justify-center space-x-8">
              <Link
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonals"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonals
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              <Link
                href="#dashboard"
                className="rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2"
              >
                Get Started
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => SetIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-red-300" />
              ) : (
                <Menu className="h-6 w-6 text-blue-300" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonals"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonals
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              <Link
                href="#dashboard"
                className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Anonymous
                  <span className="gradient-text block">Mental Health</span>
                  Sanctuary
                </h1>
                <p className="text-xl text-gray-900 leading-relaxed">
                  Experience completely anonymous journaling with AI-powered
                  insights, optional human therapist support, and advanced
                  emotional pattern detection. Your mental wellness journey,
                  protected and private.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify center">
                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span className="font-semibold">
                      Start Anonymous Journey
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-blue-600 text-blue-500 px-8 py-4 rounded-full hover:text-blue-50 transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  100% Anonymous • 50,000+ Users
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-2xl">100%</div>
                  <div className="text-gray-500 text-sm">Anonymous</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-bold text-2xl">24/7</div>
                  <div className="text-gray-500 text-sm">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 font-bold text-2xl">95%</div>
                  <div className="text-gray-500 text-sm">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 100, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Anonymous Journaling</h3>
                      <p className="text-blue-100">
                        Complete privacy protection
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-400 rounded-full text-white flex items-center justify-center">
                        AI
                      </div>
                      <div className="flex-1">
                        <p className="text-sm mb-2">
                          &ldquo;I notice you&rsquo;ve been feeling anxious
                          about work lately. Would you like to explore some
                          coping strategies?&rdquo;
                        </p>
                        <div className="flex space-x-2">
                          <button className="bg-white/30 py-1 px-3 rounded-full text-sm">
                            Yes, help me
                          </button>
                          <button className="bg-white/30 py-1 px-3 rounded-full text-sm">
                            Maybe later
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="flex space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">Mood Trends</span>
                      </div>
                      <div className="text-xs text-blue-100">
                        ↗ 15% improvement
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="flex space-x-2">
                        <UserCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Therapist Match
                        </span>
                      </div>
                      <div className="text-xs text-blue-100">Available Now</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-blue-100 text-sm">
                      Advanced NLP detects emotional patterns automatically
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900">
              Complete Anonymous Mental Health Platform
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From anonymous journaling to AI insights and human therapist
              support - everything you need for your mental wellness journey,
              completely private and secure.
            </p>
          </motion.div>

          <div className="grid grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Anonymous Journaling",
                description:
                  "Write freely without any identity tracking. Your thoughts remain completely private with end-to-end encryption.",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Brain,
                title: "GPT-Powered Reflections",
                description:
                  "Get AI-generated insights and reflections on your journal entries with personalized therapeutic suggestions.",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: UserCheck,
                title: "Human Therapist Escalation",
                description:
                  "Seamlessly connect with licensed therapists when you need human support, maintaining your anonymity.",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: TrendingUp,
                title: "Mental Health Tracking",
                description:
                  "Advanced analytics track your emotional patterns, mood trends, and mental health progress over time.",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                icon: Zap,
                title: "NLP Pattern Detection",
                description:
                  "Our advanced NLP automatically detects emotional patterns, triggers, and areas that need attention.",
                gradient: "from-red-500 to-red-600",
              },
              {
                icon: Shield,
                title: "Zero-Knowledge Architecture",
                description:
                  "Complete anonymity with zero-knowledge storage. We never know who you are, ensuring total privacy.",
                gradient: "from-teal-500 to-teal-600",
              },
              {
                icon: MessageCircle,
                title: "Crisis Intervention",
                description:
                  "Intelligent crisis detection with immediate access to emergency resources and human counselors.",
                gradient: "from-pink-500 to-pink-600",
              },
              {
                icon: BarChart3,
                title: "Mood Analytics",
                description:
                  "Detailed mood tracking with interactive charts showing your emotional patterns and triggers.",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Clock,
                title: "24/7 AI Companion",
                description:
                  "Always-available AI companion for immediate support, coping strategies, and mindfulness exercises.",
                gradient: "from-emerald-500 to-emerald-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 mt-16 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
                  Advanced Emotional Intelligence
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our AI understands context, emotions, and subtle patterns in
                  your writing to provide meaningful insights and detect when
                  you might need additional support.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Sentiment analysis with 94% accuracy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Automatic trigger identification
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Personalized coping strategy suggestions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Crisis detection and immediate support
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm mb-2">
                          Analyzing your journal entry...
                        </p>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-800">
                            &ldquo;I see you&rsquo;ve been feeling overwhelmed
                            lately. Would you like to explore some relaxation
                            techniques?&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100">
                      <div className="flex justify-between items-center text-xs text-gray-400 mt-3">
                        <p>Mood: Stressed</p>
                        <p>Confidence: 92%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="font-display text-4xl font-bold text-gray-900">
            Your Private Mental Health Journal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most intuitive and secure journaling platform
            designed specifically for mental wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display text-gray-900 text-2xl font-bold">
                Write Freely, Remain Anonymous
              </h3>
              <p className="text-lg text-gray-600">
                Our platform ensures complete anonymity while providing powerful
                AI insights. No personal information is ever collected or
                stored.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <Lock className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">
                    End-to-End Encrypted
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Your entries are encrypted before leaving your device
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <div className="text-gray-900 font-semibold">AI Insights</div>
                </div>
                <p className="text-sm text-gray-600">
                  Instant analysis and personalized recommendations
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <div className="text-gray-900 font-semibold">
                    Pattern Recognition
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Automatic detection of emotional patterns and triggers
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-red-400" />
                  <div className="text-gray-900 font-semibold">
                    Therapist Connect
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Optional escalation to licensed professionals
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-3">
                Ready to start your journey?
              </h4>
              <p className="text-blue-100 mb-4">
                Join thousands who have found peace through anonymous
                journaling.
              </p>

              <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                Start Writing Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">
                        Anonymous Journal
                      </div>
                      <p className="text-sm text-blue-100">
                        Today&rsquo;s Entry
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Today, 2:30 PM
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      &ldquo;Feeling overwhelmed with work today. The project
                      deadline is approaching and I&rsquo;m struggling to manage
                      my anxiety about it. I notice my sleep has been affected
                      too...&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Brain className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-bold text-gray-800">
                        AI Insights
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-700 text-sm leading-relaxed">
                      &ldquo;I detect work-related stress and sleep concerns.
                      Here are some strategies:&rdquo;
                    </p>
                    <ul className="text-blue-700 text-xs space-y-1">
                      <li>• Try the 4-7-8 breathing technique</li>
                      <li>• Break the project into smaller tasks</li>
                      <li>• Consider a 10-minute meditation</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center space-x-2 px-2">
                    <button className="flex-1 bg-green-100 px-4 py-2 rounded-lg text-green-800 font-semibold text-sm hover:bg-green-300 transition-colors">
                      Try Techniques
                    </button>

                    <button className="flex-1 bg-purple-100 px-4 py-2 rounded-lg text-purple-800 font-semibold text-sm hover:bg-purple-300 transition-colors">
                      Talk to Therapist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonals" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900">
              Real Stories, Real Healing
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See how anonymous journaling has transformed lives while
              protecting privacy. Here are some of our users' experiences:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anonymous User #1247",
                review:
                  "The anonymity allowed me to be completely honest about my struggles. The AI insights helped me understand my patterns, and when I needed human support, the therapist connection was seamless. I've never felt more supported while staying completely private.",
                condition: "Anxiety & Depression",
                improvement: "78% mood improvement in 3 months",
              },
              {
                name: "Anonymous User #892",
                review:
                  "Being able to journal without fear of judgment or exposure was life-changing. The AI detected my trauma triggers before I even realized them myself. The crisis intervention feature literally saved my life one night.",
                condition: "PTSD & Trauma",
                improvement: "Sleeping 6+ hours consistently",
              },
              {
                name: "Anonymous User #2156",
                review:
                  "The pattern recognition showed me how work stress was affecting my entire life. The AI suggested techniques that actually worked, and when I needed professional help, I could connect instantly while staying anonymous.",
                condition: "Work Burnout",
                improvement: "Reduced anxiety by 65%",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-md italic">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <div className="flex items-center space-x-2 mt-4">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {testimonial.condition}
                </span>

                <div className="bg-green-50 rounded-lg p-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      {testimonial.improvement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="font-display text-4xl font-bold">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, NLP, and security
              technologies to provide unparalleled mental health support while
              maintaining complete anonymity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "GPT-4 Integration",
                description:
                  "Advanced language model trained on therapeutic techniques and mental health research",
                stats: "94% accuracy in emotional analysis",
              },
              {
                icon: Shield,
                title: "Zero-Knowledge Encryption",
                description:
                  "Military-grade encryption ensures we never see your personal data",
                stats: "256-bit AES encryption",
              },
              {
                icon: BarChart3,
                title: "Advanced NLP",
                description:
                  "Real-time sentiment analysis and pattern recognition in your writing",
                stats: "15+ emotional markers detected",
              },
              {
                icon: Globe,
                title: "Scalable Infrastructure",
                description:
                  "Cloud-native architecture supporting millions of anonymous users",
                stats: "99.9% uptime guarantee",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="font-display text-xl text-white font-semibold mb-2">
                  {tech.title}
                </h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  {tech.description}
                </p>
                <span className="text-sm text-blue-200 font-medium">
                  {tech.stats}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 py-8 px-12 text-center mt-12 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Massive Scale, Personal Touch
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-blue-300 font-bold text-3xl">50K+</div>
                <div className="text-blue-100 text-sm">Anonymous Users</div>
              </div>
              <div className="text-center">
                <div className="text-green-300 font-bold text-3xl">1M+</div>
                <div className="text-blue-100 text-sm">Journal Entries</div>
              </div>
              <div className="text-center">
                <div className="text-purple-300 font-bold text-3xl">10K+</div>
                <div className="text-blue-100 text-sm">Therapist Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-orange-300 font-bold text-3xl">24/7</div>
                <div className="text-blue-100 text-sm">AI Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="space-y-4">
              <h1 className="font-display text-5xl font-bold">
                Your Mental Health Journey <br></br>
                <span className="text-blue-300">
                  Starts Here, Stays Private
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands who have found healing through our anonymous
                platform. No judgment, no exposure, just pure support for your
                mental wellness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span className="font-semibold">
                      Start Anonymous Journey
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="border-2 bg-transparent border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Connect With Therapist
                </motion.button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-lg">100% Anonymous</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <span className="text-lg">Completely Free to Start</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
