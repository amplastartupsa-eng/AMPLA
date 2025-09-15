import React from 'react';

const VideoCard: React.FC<{ title: string; videoId: string }> = ({ title, videoId }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-400 mb-3">{title}</h3>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded"
                ></iframe>
            </div>
        </div>
    );
};


const VideoTutorials: React.FC = () => {
    return (
        <section className="space-y-6">
            <VideoCard title="Como embalar um produto para devolver aos Correios" videoId="u-n5f5Y057M" />
            <VideoCard title="Como embalar um produto para enviar pelos Correios" videoId="qJc3hGDbxjA" />
        </section>
    );
}

export default VideoTutorials;
