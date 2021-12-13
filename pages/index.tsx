import type {NextPage} from 'next';
import Hls from 'hls.js';
import {useEffect, useRef} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const src = 'eimi.m3u8';

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;
const Video = styled.video`
  width: 100%;
`;

const Container = styled.div`
  padding: 20px 16px 50px;
`;

const Title = styled.h1`
  font-size: 1rem;
`;

const MetaText = styled.span`
  margin-top: 12px;
  font-size: 11px;
  color: rgba(121, 121, 121, 0.6);
`;

const Top: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video == null) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }
  }, []);

  return (
    <div>
      <Global />
      <Video ref={videoRef} controls playsInline poster="eimi.png" />

      <Container>
        <Title>【会員限定動画】実は●●俳優と付き合ってました</Title>
        <MetaText>1万回視聴・5日前</MetaText>
      </Container>
    </div>
  );
};

export default Top;
