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
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
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
            ]}
          </div>
        </div>
      </section>
    </div>
  );
}
