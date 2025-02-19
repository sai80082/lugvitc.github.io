import { NavLink } from 'react-router-dom';
import TerminalWindow from '../../../components/terminal/terminalWindow';
import TerminalPrompt from '../../../components/terminalPrompt/terminalPrompt';

import styles from './homePage.module.css';

export default function HomePage() {
    return (
        <TerminalWindow title='Rescue Tux'>
            <section id='terminal'>
                <TerminalPrompt path='~'> cd rescue-tux </TerminalPrompt>
                <TerminalPrompt path='~/rescue-tux'>
                    ./rescue-tux --play
                </TerminalPrompt>
            </section>
            <div className={styles.welcomeText}>Welcome to...</div>
            <div className={styles.eventName}>Rescue Tux</div>
            <div className={styles.subtitle}>
                ...a one day event for learning linux basics and rescuing a
                beloved mascot!
            </div>

            <div className={styles.buttons}>
                <NavLink className={styles.button} to='/rescue-tux/create-team'>
                    Create Team
                </NavLink>
                <br />
                <NavLink className={styles.button} to='/rescue-tux/play'>
                    Play
                </NavLink>
            </div>

            <iframe
                className={styles.video}
                width='100%'
                height='576'
                src='https://www.youtube.com/embed/BRUzI-esD2c'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>

            <br />

            <div>Rescue Tux is a fun, one-day event with two sessions:</div>

            <ul>
                <li>The first, about learning basic linux skills.</li>
                <li>
                    The second allows you to put your skills into action and
                    solve exciting challenges and uncover a mystery.
                </li>
            </ul>

            <div>
                There is a cash prize for the winning teams, a catered lunch and
                GeeksForGeeks swags for all!
            </div>

            <br />
            <div className={styles.buttons}>
                <NavLink className={styles.button} to='/rescue-tux/register'>
                    Register Now!
                </NavLink>
                {/* <br />
                <NavLink to='/rescue-tux/login'>Login</NavLink>
                <br />
                <NavLink to='/rescue-tux/make-team'>Create a Team</NavLink> */}
            </div>
        </TerminalWindow>
    );
}

