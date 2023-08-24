'use client'
import React, { useState } from 'react'

export const steps = [
    {
        id: 1,
        title: 'Resume data',
        content: <div>first</div>,
    },
    {
        id: 2,
        title: 'Personal data',
        content: <div>second</div>,
    },
    {
        id: 3,
        title: 'Nueva',
        content: <div>second</div>,
    }
]

export const Resume = ({ locale }: { locale: string }) => {
    
    const [current, setCurrent] = useState(1)
    
    
    return <div className="h-screen w-full overflow-auto p-8 flex items-center justify-center bg-gray-100 ">
        <div className="w-4/6 h-4/6 bg-white cool-shadow rounded-xl relative">
            <div className="absolute w-full h-2 rounded top-0 left-0">
                <div className="h-full bg-green-400" style={{
                    width: `${(current / steps.length) * 100}%`,
                }} />
                    
                
            </div>
        </div>
    </div>
}