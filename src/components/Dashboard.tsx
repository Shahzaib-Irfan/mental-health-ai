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
    dummyJournalEntries: {
        data: {
            id: string;
            title: string;
            content: string;
            createdAt: string;
            tags: string[];
        }[];
    };
}

const Journal = ({ journalContent, setJournalContent, dummyJournalEntries }: JournalProps) => {
    return (
        <>
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{ duration: 0.5 }}
                className='space-y-6'
            >
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>
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

                <div className='bg-gradient-to-br from-gray-50 to-white p-6 mt-6 rounded-3xl border border-gray-100 shadow-lg'>
                    <h3 className="font-display text-xl text-gray-900 font-bold">Previous Entries</h3>
                    <div className="mt-4">
                        {dummyJournalEntries.data.map((entry) => (
                            <div key={entry.id} className="border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className='flex items-start justify-between'>
                                    <div className='flex items-center space-x-2'>
                                        <span className="text-2xl">📝</span>
                                        <span className='text-sm text-gray-500'>
                                            {new Date(entry.createdAt).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>

                                    <div className='bg-blue-100 px-4 py-1 rounded-md'>
                                        <div className='flex items-center justify-center space-x-1'>
                                            <Brain className='w-3 h-3 text-blue-500' />
                                            <span className='text-xs text-blue-500'>Pending Analysis</span>
                                        </div>
                                    </div>
                                </div>

                                <h2 className='text-md text-gray-900 font-medium'>
                                    {entry.title}
                                </h2>

                                <p className='text-gray-600 text-sm'>
                                    {entry.content.toString().substring(0, 130)}...
                                </p>
                            </div>

                            
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

interface MoodEntryData {
    value: number;
    notes: string;
    energy: number;
    anxiety: number;
    stress: number;
}

interface MoodTrackingProps {
    newMoodEntry: MoodEntryData;
    setNewMoodEntry: (entry: MoodEntryData) => void;
    dummyMoodEntries?: {
        data: {
            id: string;
            value: number;
            notes: string;
            energy: number;
            anxiety: number;
            stress: number;
            createdAt: string;
        }[];
    }
}

const MoodTracking = ({ newMoodEntry, setNewMoodEntry, dummyMoodEntries }: MoodTrackingProps) => {
    return <>
        <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className='space-y-6'
        >
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-lg p-8'>
                <div className='space-y-4'>
                    <h2 className='text-xl text-gray-900 font-bold'>Log Your Mood</h2>
                    <p className='text-gray-600 text-sm'>How are you feeling today? (Scale 1 - 5)</p>
                    <div className='flex items-left justify-start space-x-3'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                onClick={() => setNewMoodEntry({ ...newMoodEntry, value })}
                                className={`w-12 h-12 ${newMoodEntry.value === value ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-800 border border-gray-300 hover:border-blue-500'} border-2 rounded-full`}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                    <span className='text-gray-600 font-medium text-sm'>
                        Notes (Optional)
                    </span>
                    <textarea name="" id="" className='w-full h-32 p-4 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'></textarea>

                    <button className='w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg'>
                        Log Mood Entry
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">Recent Mood Entries</h3>
                    <div className="space-y-4">
                      {dummyMoodEntries?.data && dummyMoodEntries.data.length > 0 && (
                        dummyMoodEntries.data.map((entry) => (
                          <div key={entry.id} className="border border-gray-100 rounded-lg p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="flex items-center space-x-3 mb-1">
                                  <span className="text-2xl">😊</span>
                                  <span className="font-medium">Mood: {entry.value}/5</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                  {new Date(entry.createdAt).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    hour: 'numeric',
                                    minute: '2-digit'
                                  })}
                                </p>
                                {entry.notes && (
                                  <p className="text-sm text-gray-600 mt-2">{entry.notes}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )))}
                    </div>
                </div>
        </motion.div>
    </>;
}

const Analytics = () => {
    return <>
        <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:20}}
            transition={{duration:0.3}}
            className='space-y-6'
        >
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm border border-gray-100 p-6'>
                <h4 className='font-display text-gray-900 font-semibold text-xl'>
                    Analytics Dashboard
                </h4>

                <div className="grid md:grid-cols-2 gap-6 items-start mt-6">
                    <div className='bg-gray-100 rounded-xl'>
                        <div className='p-6'>
                            <h4 className="text-md text-gray-800 font-semibold mb-4">
                                Mood Statistics
                            </h4>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Average Mood
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    4.00
                                </span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Total Entries
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    8
                                </span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    This Week
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    32
                                </span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Average Mood
                                </span>
                                <span className="text-sm text-green-600 mb-2">
                                    improving
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-100 rounded-xl'>
                        <div className='p-6'>
                            <h4 className="text-md text-gray-800 font-semibold mb-4">
                                Journal Statistics
                            </h4>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Total Entries
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    49
                                </span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Words Written
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    13489
                                </span>
                            </div>
                            <div className="flex items-start justify-between">
                                <span className="text-sm text-gray-600 mb-2">
                                    Avg. Length
                                </span>
                                <span className="text-sm text-gray-900 font-medium">
                                    275.2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}

export default function Dashboard() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState('journal');
    const [journalContent, setJournalContent] = useState('');
    const [newMoodEntry, setNewMoodEntry] = useState({
    value: 5,
    notes: '',
    energy: 5,
    anxiety: 3,
    stress: 3
  })

    const sidebarItems = [
        { id: 'journal', label: 'Journal', icon: BookOpen },
        { id: 'mood', label: 'Mood Tracking', icon: Heart },
        { id: 'insights', label: 'AI Insights', icon: Brain },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 }
    ];

    const dummyJournalEntries = {
        data: [
        {
            id: '1',
            title: 'Entry from 8/9/2025',
            content: 'Today was a good day. I felt positive and accomplished a lot of my goals. The weather was nice and I spent time with friends which really lifted my mood.',
            createdAt: '2025-08-09T10:30:00Z',
            tags: ['daily', 'positive']
        },
        {
            id: '2',
            title: 'Entry from 8/8/2025',
            content: 'Had some challenges today but managed to work through them. Feeling grateful for the support system I have. Tomorrow is a new day with new opportunities.',
            createdAt: '2025-08-08T15:45:00Z',
            tags: ['daily', 'reflection']
        },
        {
            id: '3',
            title: 'Entry from 8/7/2025',
            content: 'Reflecting on personal growth and the journey so far. It\'s interesting to see how much perspective can change over time. Feeling optimistic about the future.',
            createdAt: '2025-08-07T20:15:00Z',
            tags: ['daily', 'growth']
        }
        ]
    }

    const dummyMoodEntries = {
    data: [
      {
        id: '1',
        value: 4,
        notes: 'Feeling good today, productive at work',
        energy: 4,
        anxiety: 2,
        stress: 2,
        createdAt: '2025-08-09T14:30:00Z'
      },
      {
        id: '2',
        value: 3,
        notes: 'Average day, some ups and downs',
        energy: 3,
        anxiety: 3,
        stress: 3,
        createdAt: '2025-08-08T18:20:00Z'
      },
      {
        id: '3',
        value: 5,
        notes: 'Excellent day! Everything went smoothly',
        energy: 5,
        anxiety: 1,
        stress: 1,
        createdAt: '2025-08-07T16:45:00Z'
      },
      {
        id: '4',
        value: 4,
        notes: 'Good morning routine, feeling centered',
        energy: 4,
        anxiety: 2,
        stress: 2,
        createdAt: '2025-08-06T09:15:00Z'
      }
    ]
  }

  const dummyMoodStats = {
    averageMood: 4.0,
    totalEntries: 4,
    entriesThisWeek: 4,
    streakDays: 7,
    moodTrend: 'improving'
  }

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

                {/* Main Content */}
                <main className='w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-16'>
                    {selectedTab === 'journal' && <Journal journalContent={journalContent} setJournalContent={setJournalContent} dummyJournalEntries={dummyJournalEntries} />}
                    {selectedTab === 'mood' && <MoodTracking newMoodEntry={newMoodEntry} setNewMoodEntry={setNewMoodEntry} dummyMoodEntries={dummyMoodEntries} />}
                    {selectedTab === 'analytics' && <Analytics />}
                </main>
            </div>

        </div>
    );
}