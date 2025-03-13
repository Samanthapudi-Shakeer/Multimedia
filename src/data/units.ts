import { Unit } from '../types';

export const units: Unit[] = [
  {
    id: 1,
    title: "Introduction to Multimedia",
    topics: [
      {
        id: 1,
        title: "What is Multimedia?",
        content: `Multimedia is the integration of multiple forms of content delivered through different mediums. Key components include:

1. Text: The foundation of digital content
2. Graphics: Static visual elements
3. Animation: Moving visual elements
4. Audio: Sound, music, and voice
5. Video: Moving pictures with sound
6. Interactivity: User engagement elements

Real-world examples:
- Educational software combining text, videos, and quizzes
- Video games with graphics, sound effects, and user interaction
- Digital magazines with embedded videos and interactive infographics
- Virtual museums with 360° views and audio guides`,
        imageUrl: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/1RV3Z7Xv_Wc",
        audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        quiz: {
          id: 1,
          questions: [
            {
              id: 1,
              text: "Which of the following is NOT a key component of multimedia?",
              options: ["Text", "Video", "Database", "Audio"],
              correctAnswer: 2
            },
            {
              id: 2,
              text: "What makes multimedia different from traditional media?",
              options: [
                "It only uses digital formats",
                "It combines multiple forms of media",
                "It's only for entertainment",
                "It requires internet connection"
              ],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 2,
        title: "Multimedia Software Tools",
        content: `Essential multimedia software tools and their applications:

1. Image Editing:
   - Adobe Photoshop: Professional photo editing
   - GIMP: Open-source alternative
   - Figma: Web-based design tool

2. Video Editing:
   - Adobe Premiere Pro: Professional video editing
   - DaVinci Resolve: Color grading and editing
   - OpenShot: Simple open-source editor

3. Audio Production:
   - Audacity: Audio recording and editing
   - Pro Tools: Professional audio workstation
   - GarageBand: Music creation

4. Animation:
   - Adobe After Effects: Motion graphics
   - Blender: 3D animation
   - Unity: Game development

5. Web Development:
   - HTML5: Structure and content
   - CSS3: Styling and animation
   - JavaScript: Interactivity

Real-world applications:
- Marketing campaigns using motion graphics
- E-learning platforms with interactive content
- Mobile apps with rich multimedia features`,
        imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/8Qn_spdM5Zg",
        quiz: {
          id: 2,
          questions: [
            {
              id: 1,
              text: "Which software is best suited for professional photo editing?",
              options: ["GIMP", "Adobe Photoshop", "Blender", "OpenShot"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the primary purpose of HTML5 in multimedia?",
              options: [
                "Video editing",
                "Structure and content",
                "3D animation",
                "Audio production"
              ],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 3,
        title: "Multimedia Data Types and Formats",
        content: `Understanding different multimedia data types and their formats:

1. Image Formats:
   - JPEG: Lossy compression for photographs
   - PNG: Lossless compression with transparency
   - SVG: Vector graphics for scalable images
   - WebP: Modern format for web images

2. Video Formats:
   - MP4 (H.264): Universal compatibility
   - WebM: Open format for web video
   - ProRes: Professional video production
   - AV1: New efficient codec

3. Audio Formats:
   - MP3: Compressed audio for music
   - WAV: Uncompressed audio
   - AAC: Advanced audio coding
   - FLAC: Lossless audio compression

4. Document Formats:
   - PDF: Portable document format
   - EPUB: Electronic publications
   - HTML: Web documents

Real-world examples:
- Streaming services using adaptive bitrate video
- Professional photography workflow with RAW images
- Digital audio workstations using lossless formats`,
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/e5rAwn3_Fy8",
        audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav",
        quiz: {
          id: 3,
          questions: [
            {
              id: 1,
              text: "Which image format is best for graphics with transparency?",
              options: ["JPEG", "PNG", "GIF", "WebP"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the advantage of FLAC over MP3?",
              options: [
                "Smaller file size",
                "Better compatibility",
                "Lossless compression",
                "Faster playback"
              ],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "Colour in Image and Video",
    topics: [
      {
        id: 4,
        title: "Color Science and Human Perception",
        content: `Understanding how humans perceive and interpret color:

1. Human Vision:
   - Cone cells: RGB light sensitivity
   - Rod cells: Brightness perception
   - Brain interpretation of color signals

2. Color Properties:
   - Hue: Pure color (red, blue, etc.)
   - Saturation: Color intensity
   - Brightness: Light to dark variation

3. Color Psychology:
   - Emotional responses
   - Cultural significance
   - Marketing applications

Real-world applications:
- Brand color selection
- User interface design
- Digital art creation
- Color correction in film`,
        imageUrl: "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/PCUZ02HQaLk",
        quiz: {
          id: 4,
          questions: [
            {
              id: 1,
              text: "What are the three main properties of color?",
              options: [
                "Red, Green, Blue",
                "Hue, Saturation, Brightness",
                "Cyan, Magenta, Yellow",
                "Light, Medium, Dark"
              ],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 5,
        title: "Digital Color Models",
        content: `Understanding different color models and their applications:

1. RGB Color Model:
   - Additive color mixing
   - Used in digital displays
   - 16.7 million colors (24-bit)
   - Values: 0-255 per channel

2. CMYK Color Model:
   - Subtractive color mixing
   - Used in printing
   - Process color printing
   - Percentage values

3. HSL/HSV Color Models:
   - Intuitive color selection
   - Hue: 0-360 degrees
   - Saturation: 0-100%
   - Lightness/Value: 0-100%

4. YUV/YCbCr:
   - Used in video systems
   - Separates luminance (Y)
   - Chrominance (U/Cb, V/Cr)

Real-world applications:
- Web design color selection
- Print production
- Video color grading
- Digital art creation`,
        imageUrl: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/B4LxO2lJXJY",
        quiz: {
          id: 5,
          questions: [
            {
              id: 1,
              text: "Which color model is used in digital displays?",
              options: ["CMYK", "RGB", "HSL", "YUV"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the range of values for RGB channels?",
              options: ["0-100", "0-255", "0-360", "0-1000"],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 6,
        title: "Digital Video Fundamentals",
        content: `Understanding digital video concepts and standards:

1. Video Basics:
   - Frame rate (FPS)
   - Resolution
   - Aspect ratio
   - Bitrate

2. Color in Video:
   - Color depth
   - Color sampling (4:4:4, 4:2:2, 4:2:0)
   - Color space (Rec.709, DCI-P3)

3. Video Formats:
   - Container formats (MP4, MOV)
   - Codecs (H.264, H.265)
   - Streaming formats

4. Professional Video:
   - RAW video
   - Log color space
   - HDR video

Real-world applications:
- Film and TV production
- Live streaming
- Video conferencing
- Social media content`,
        imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/r6Rp-uo6HmI",
        quiz: {
          id: 6,
          questions: [
            {
              id: 1,
              text: "What does FPS stand for in video?",
              options: ["First Person Shooter", "Frames Per Second", "Full Picture Size", "Final Production Stage"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "Which color sampling format provides the highest quality?",
              options: ["4:2:0", "4:2:2", "4:4:4", "4:1:1"],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Compression Algorithms",
    topics: [
      {
        id: 7,
        title: "Lossless Compression Fundamentals",
        content: `Understanding lossless compression techniques:

1. Run-Length Encoding (RLE):
   - Simple compression technique
   - Replaces sequences with count
   - Used in image formats like BMP
   - Perfect for simple graphics

2. Huffman Coding:
   - Variable-length encoding
   - Frequency-based compression
   - Used in JPEG, MP3, ZIP
   - Optimal prefix codes

3. Dictionary-Based Coding:
   - LZ77, LZ78, LZW algorithms
   - Used in ZIP, GIF, PNG
   - Adaptive dictionary building
   - Pattern recognition

4. Arithmetic Coding:
   - Advanced compression technique
   - Better than Huffman coding
   - Used in JPEG2000, H.264
   - Floating-point implementation

Real-world applications:
- File compression (ZIP)
- Text compression
- Database compression
- Network protocols`,
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/OtDxDvCpPL4",
        quiz: {
          id: 7,
          questions: [
            {
              id: 1,
              text: "Which compression technique is best for simple graphics with repeated patterns?",
              options: ["Huffman Coding", "Run-Length Encoding", "Arithmetic Coding", "LZW"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What type of coding uses variable-length codes based on frequency?",
              options: ["RLE", "Huffman", "LZ77", "Binary"],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 8,
        title: "Lossy Compression Techniques",
        content: `Understanding lossy compression methods:

1. Transform Coding:
   - DCT (Discrete Cosine Transform)
   - Wavelet transforms
   - Frequency domain compression
   - Used in JPEG, MPEG

2. Quantization:
   - Scalar quantization
   - Vector quantization
   - Perceptual coding
   - Psychoacoustic models

3. Motion Compensation:
   - Temporal redundancy
   - Block matching
   - Motion vectors
   - Frame prediction

4. Rate-Distortion Theory:
   - Quality vs. compression
   - Optimal bit allocation
   - Perceptual quality metrics
   - Compression efficiency

Real-world applications:
- Digital photography (JPEG)
- Video streaming (H.264)
- Audio compression (MP3)
- Mobile applications`,
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/QoZ8pcO6DQU",
        quiz: {
          id: 8,
          questions: [
            {
              id: 1,
              text: "Which transform is commonly used in JPEG compression?",
              options: ["Fourier Transform", "Discrete Cosine Transform", "Wavelet Transform", "Z-Transform"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the main advantage of lossy compression?",
              options: [
                "Perfect reconstruction",
                "Higher compression ratios",
                "No data loss",
                "Simpler algorithms"
              ],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: "Compression Standards",
    topics: [
      {
        id: 9,
        title: "Image Compression Standards",
        content: `Understanding image compression standards:

1. JPEG Standard:
   - DCT-based compression
   - Quality settings (1-100)
   - Progressive encoding
   - Baseline and extended

2. JPEG 2000:
   - Wavelet-based compression
   - Superior quality
   - Scalable resolution
   - ROI coding

3. JPEG-LS:
   - Lossless compression
   - Near-lossless mode
   - LOCO-I algorithm
   - Fast encoding/decoding

4. WebP:
   - Modern web format
   - Better than JPEG
   - Lossless support
   - Animation support

Real-world applications:
- Digital photography
- Web graphics
- Medical imaging
- Archival storage`,
        imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/Ba89cI9eIg8",
        quiz: {
          id: 9,
          questions: [
            {
              id: 1,
              text: "Which JPEG quality setting provides the best compression?",
              options: ["100", "75", "50", "25"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the main advantage of JPEG 2000 over standard JPEG?",
              options: [
                "Smaller file size",
                "Better quality at high compression",
                "Faster encoding",
                "Wider support"
              ],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 10,
        title: "Video Compression Standards",
        content: `Understanding video compression standards:

1. H.264/AVC:
   - Industry standard
   - High efficiency
   - Multiple profiles
   - Hardware acceleration

2. H.265/HEVC:
   - Next-generation codec
   - Better compression
   - 4K/8K support
   - HDR compatibility

3. VP9:
   - Open-source codec
   - YouTube standard
   - Royalty-free
   - WebM container

4. AV1:
   - Alliance for Open Media
   - Future of streaming
   - Better than HEVC
   - Open and free

Real-world applications:
- Streaming services
- Broadcast television
- Video conferencing
- Mobile video`,
        imageUrl: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/w_OC-XKQhpM",
        quiz: {
          id: 10,
          questions: [
            {
              id: 1,
              text: "Which codec is most widely used for streaming today?",
              options: ["H.265", "H.264", "VP9", "AV1"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What is the main advantage of AV1?",
              options: [
                "Fastest encoding",
                "Widest support",
                "Best compression",
                "Lowest latency"
              ],
              correctAnswer: 2
            }
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: "MPEG Standards",
    topics: [
      {
        id: 11,
        title: "MPEG-1 and MPEG-2",
        content: `Understanding early MPEG standards:

1. MPEG-1:
   - First digital video standard
   - CD-ROM video
   - MP3 audio
   - VCD format

2. MPEG-2:
   - DVD and digital TV
   - Transport stream
   - Scalable coding
   - Multiple profiles

3. Common Features:
   - Motion compensation
   - Block transform coding
   - Variable bit rate
   - B-frames support

Real-world applications:
- DVD video
- Digital television
- Satellite broadcasting
- Video archiving`,
        imageUrl: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/L4yJGTPdx6g",
        quiz: {
          id: 11,
          questions: [
            {
              id: 1,
              text: "Which MPEG standard is used in DVD video?",
              options: ["MPEG-1", "MPEG-2", "MPEG-4", "MPEG-7"],
              correctAnswer: 1
            },
            {
              id: 2,
              text: "What audio format was introduced with MPEG-1?",
              options: ["AAC", "MP3", "WAV", "FLAC"],
              correctAnswer: 1
            }
          ]
        }
      },
      {
        id: 12,
        title: "MPEG-4 and Beyond",
        content: `Understanding modern MPEG standards:

1. MPEG-4:
   - Object-based coding
   - Advanced compression
   - Interactive content
   - Streaming support

2. MPEG-7:
   - Multimedia metadata
   - Content description
   - Search and retrieval
   - Semantic web

3. H.264/AVC:
   - Part 10 of MPEG-4
   - High efficiency
   - Network friendly
   - Universal adoption

4. H.265/HEVC:
   - Next generation
   - 4K/8K support
   - 50% better compression
   - HDR support

Real-world applications:
- Streaming services
- Mobile video
- Virtual reality
- Interactive media`,
        imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=2000",
        videoUrl: "https://www.youtube.com/embed/ZLZhyfvz498",
        quiz: {
          id: 12,
          questions: [
            {
              id: 1,
              text: "What is the main feature of MPEG-4?",
              options: [
                "Object-based coding",
                "Lossless compression",
                "Metadata support",
                "Audio only"
              ],
              correctAnswer: 0
            },
            {
              id: 2,
              text: "Which MPEG standard focuses on content description?",
              options: ["MPEG-4", "MPEG-7", "MPEG-2", "MPEG-1"],
              correctAnswer: 1
            }
          ]
        }
      }
    ]
  }
];
