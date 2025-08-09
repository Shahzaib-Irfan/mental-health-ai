"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Brain,
    Shield,
    BarChart3,
    BookOpen,
    Heart,
    FileText,
    TrendingUp,
    Clock,
    Plus,
} from "lucide-react";
import SideBar from '@/components/SideBar';

interface JournalProps {
    journalContent: string;
    setJournalContent: (content: string) => void;
}

const Journal = ({ journalContent, setJournalContent }: JournalProps) => {
        return (
            <>
                <motion.div
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{ duration: 0.5 }}
                    className='space-y-6 m-8'
                >
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 items-center'>
                        <div className='rounded-lg bg-white shadow-md p-6 border border-gray-100'>
                            <div className='flex items-center justify-center space-x-2'>
                                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                                    <FileText className='w-5 h-5 text-blue-600' />
                                </div>
                                <div className='flex flex-col items-left'>
                                    <span className='text-sm font-light text-gray-600'>Total Entries</span>
                                    <span className='text-xl font-bold text-gray-900'>42</span>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg bg-white shadow-md p-6 border border-gray-100'>
                            <div className='flex items-center justify-center space-x-2'>
                                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                                    <TrendingUp className='w-5 h-5 text-green-600' />
                                </div>
                                <div className='flex flex-col items-left'>
                                    <span className='text-sm font-light text-gray-600'>Mood Average</span>
                                    <span className='text-xl font-bold text-gray-900'>N/A</span>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg bg-white shadow-md p-6 border border-gray-100'>
                            <div className='flex items-center justify-center space-x-2'>
                                <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                                    <Brain className='w-5 h-5 text-purple-600' />
                                </div>
                                <div className='flex flex-col items-left'>
                                    <span className='text-sm font-light text-gray-600'>Mood Entries</span>
                                    <span className='text-xl font-bold text-gray-900'>0</span>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg bg-white shadow-md p-6 border border-gray-100'>
                            <div className='flex items-center justify-center space-x-2'>
                                <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                                    <Clock className='w-5 h-5 text-orange-600' />
                                </div>
                                <div className='flex flex-col items-left'>
                                    <span className='text-sm font-light text-gray-600'>Streak Days</span>
                                    <span className='text-xl font-bold text-gray-900'>12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg p-8'>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-display text-xl text-gray-900 font-bold">New Journal Entry</h3>
                            <button 
                                type="button"
                                disabled={!journalContent.trim()} 
                                className="bg-blue-600 text-white text-md font-medium flex items-center justify-center rounded-lg px-3 py-2 hover:bg-blue-700 space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Add your save logic here
                                    console.log('Saving journal entry:', journalContent);
                                }}
                            >
                                <Plus className="w-4 h-4"/>
                                <span>Save Entry</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <textarea 
                                value={journalContent} 
                                onChange={(e) => {
                                    e.preventDefault();
                                    setJournalContent(e.target.value);
                                }} 
                                placeholder="How are you feeling today? Write freely and anonymously..."
                                className="w-full h-32 p-6 text-gray-800 font-medium border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                            />
                        </div>
                        
                        <div className="text-gray-500 text-sm">
                            {journalContent.length} characters
                        </div>
                    </div>
                </motion.div>
            </>
        );
    }

export default function Dashboard() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState('journal');
    const [journalContent, setJournalContent] = useState('');

    const sidebarItems = [
        { id: 'journal', label: 'Journal', icon: BookOpen },
        { id: 'mood', label: 'Mood Tracking', icon: Heart },
        { id: 'insights', label: 'AI Insights', icon: Brain },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex">

            <SideBar sideBarItems={sidebarItems} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {/* Main Content Area */}
            <div className={`flex-1 transition-all duration-300 ease-in-out ${isSideBarOpen ? 'lg:ml-72' : 'lg:ml-0'}`}>
                {/* Top Navigation */}
                <nav
                    className="fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-30 border-b border-blue-100"
                    style={{ left: isSideBarOpen ? '280px' : '0px' }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-4 ml-auto">
                                <div className="bg-green-50 rounded-full px-3 py-1">
                                    <div className="flex items-center space-x-2">
                                        <Shield className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-700">Connecting...</span>
                                    </div>
                                </div>
                                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                    Connect with Therapist
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            
            <main className='max-w-7xl mx-auto py-8 sm:px-6 lg:px-8'>
                {selectedTab === 'journal' && <Journal journalContent={journalContent} setJournalContent={setJournalContent} />}
            </main>

        </div>
    );
}