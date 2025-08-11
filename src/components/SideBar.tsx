import {motion} from "framer-motion";
import Link from "next/link";
import {
  Brain,
  X,
  Shield,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

interface SideBarItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SideBarProps {
  sideBarItems: SideBarItem[];
  isSideBarOpen: boolean;
  setIsSideBarOpen?: (open: boolean) => void;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export default function SideBar({sideBarItems, isSideBarOpen, setIsSideBarOpen, selectedTab, setSelectedTab}: SideBarProps) {


    const SidebarHeader = () => (
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex justify-center items-center">
                    <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="font-display font-bold text-lg text-gray-900">MindBuddy</h2>
                    <p className="text-sm text-gray-500">Your Mental Health Companion</p>
                </div>
            </div>
        </div>
    );

    interface SidebarNavigationProps {
        onItemClick?: () => void;
        sideBarItems: SideBarItem[];
        selectedTab: string;
        setSelectedTab: (id: string) => void;
    }

    const SidebarNavigation = ({ onItemClick, sideBarItems, selectedTab, setSelectedTab }: SidebarNavigationProps) => (
    <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-3">
            {sideBarItems.map((item, index) => (
                <Link
                    key={index}
                    href={`/dashboard`}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors duration-200 mb-1 group ${
                        selectedTab === item.id 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                    onClick={() => {
                        setSelectedTab(item.id);
                        onItemClick?.();
                    }}
                >
                    <item.icon className="w-5 h-5 group-hover:text-blue-600" />
                    <span className="font-medium">{item.label}</span>
                </Link>
            ))}
        </nav>
    </div>
);

    const SidebarFooter = () => (
        <div className="p-4 border-t border-gray-100">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-800">Privacy Protected</span>
                </div>
                <p className="text-xs text-gray-600">Your data is encrypted and secure</p>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <motion.div 
                initial={false}
                animate={{ width: isSideBarOpen ? "280px" : "0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-0 top-0 h-full bg-white shadow-xl z-40 border-r border-gray-200 hidden lg:block overflow-hidden"
            >
                <div className="flex flex-col h-full">
                    <SidebarHeader />
                    <SidebarNavigation 
                        sideBarItems={sideBarItems} 
                        selectedTab={selectedTab} 
                        setSelectedTab={setSelectedTab} 
                    />
                    <SidebarFooter />
                </div>
            </motion.div>

            {/* Mobile Sidebar */}
            <motion.div
                initial={false}
                animate={{ 
                    x: isSideBarOpen ? 0 : -280,
                    opacity: isSideBarOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl z-50 border-r border-gray-200 lg:hidden"
            >
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex justify-center items-center">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="font-display font-bold text-lg text-gray-900">MindBuddy</h2>
                                    <p className="text-sm text-gray-500">Your Mental Health Companion</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsSideBarOpen!(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    <SidebarNavigation 
                        onItemClick={() => setIsSideBarOpen!(false)} 
                        sideBarItems={sideBarItems} 
                        selectedTab={selectedTab} 
                        setSelectedTab={setSelectedTab} 
                    />
                    <SidebarFooter />
                </div>
            </motion.div>

            {/* Mobile Sidebar Backdrop */}
            {isSideBarOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSideBarOpen!(false)}
                />
            )}

            {/* Sidebar Toggle Button for all screens */}
            <motion.button
                animate={{ left: isSideBarOpen ? "280px" : "0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setIsSideBarOpen!(!isSideBarOpen)}
                className="w-10 h-20 fixed top-1/2 transform -translate-y-1/2 z-50 bg-white shadow-lg border border-gray-200 rounded-r-lg p-2 hover:bg-gray-50 transition-colors duration-200"
                // style={{
                //     borderTopLeftRadius: isSideBarOpen ? 0 : '0.5rem',
                //     borderBottomLeftRadius: isSideBarOpen ? 0 : '0.5rem',
                // }}
            >
                {isSideBarOpen ? (
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
            </motion.button>
        </>
    )
}