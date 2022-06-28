import { Colors } from '../styles/colors';
import TerminalWindow from '../components/terminal/terminalWindow';
import TerminalPrompt from '../components/terminal/terminalPrompt';
import { TypeAnimation } from '../components/typeWriter/typeWriter.js';
import TR from '../components/terminal/tr';

const firstText = 'sudo lug';
const secondText = '***************';

export default function Home() {
    const typingText = TypeAnimation(firstText);
    const typingSecondText = TypeAnimation(secondText);

    return (
        <TerminalWindow>
            <TR
                textContainer={text => (
                    <TerminalPrompt path='~'>{text}</TerminalPrompt>
                )}
                text='sudo lug'
            >
                [sudo] password for lugvitc:{' '}
                <TR
                    textContainer={text => (
                        <span style={{ color: Colors.nord11 }}>{text}</span>
                    )}
                    text='*************'
                >
                    <br />
                    <span style={{ color: Colors.nord14 }}>
                        access granted...
                    </span>
                    <br />
                    <br />
                    <div>
                        <h1 className='terminal-text'>
                            Linux Club VIT, Chennai
                        </h1>
                        The 'Linux Club' of VIT, Chennai was created to Spread
                        the awareness of Free and Open Source Software (FOSS)
                        through Linux flavours. It believes in developing
                        collaborative open-source projects.
                        <br />
                        It encourages users to understand the systems and
                        softwares they use on a fundamental level. Which can be
                        achieved only using non-proprietary tools.
                        <br />
                        It aims to get members to contribute to FOSS, make them
                        more industry ready and to promote GNU/Linux in General.
                        <br />
                        <span style={{ color: Colors.nord11 }}>L</span>
                        <span style={{ color: Colors.nord12 }}>I</span>
                        <span style={{ color: Colors.nord13 }}>N</span>
                        <span style={{ color: Colors.nord14 }}>U</span>
                        <span style={{ color: Colors.nord10 }}>X</span>
                        <span style={{ color: Colors.nord15 }}>!</span>
                    </div>
                </TR>
            </TR>
        </TerminalWindow>
    );
}

