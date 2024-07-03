import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'jquery.terminal';
import figlet from 'figlet';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useColors } from "./colors";
import { useFiles } from "./files";
import { useDirectories } from "./directories";

const useTerminal = (setShowTerminal, showTerminal) => {
    const [path, setPath] = useState("/root");
    const navigate = useNavigate();
    const colors = useColors();
    const files = useFiles();
    const terminalRef = useRef(null);
    const cvPdf = "/static/media/Alexis_Beaumont_Resume.b103f35e38552fb46296.pdf";
    const newLine = "\n";
    const space = ' ';
    const greenPath = `[${colors.green}${path}]`;
    const myName = `[${colors.purple}Alexis Beaumont]`;
    const commandsListPrompt = `[${colors.white}List of available commands:]`;
    const directories = useDirectories();
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const secretPassword = process.env.REACT_APP_SECRET_PASSWORD;

    const initializeTerminal = () => {
        if (!showTerminal) return;

        const font = 'Slant';
        const formatter = new Intl.ListFormat('en', {
            style: 'long',
            type: 'conjunction',
        });

        figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
        figlet.preloadFonts([font], ready);

        const commands = {
            help() {
                terminalRef.current.echo(`${commandsListPrompt}${newLine}${help}${newLine}`);
            },
            echo(...args) {
                terminalRef.current.echo(args.join(' '));
                terminalRef.current.echo('');
            },
            pwd() {
                terminalRef.current.echo(`${greenPath}${newLine}`);
            },
            ls(arg) {
                if (path === '/root' && (arg === '-a' || arg === '-A')) {
                    terminalRef.current.echo(
                        `${files.cv}${space}${directories.about}${space}${directories.projects}${space}${directories.secret}${newLine}`
                    );
                }
                if (path === '/root' && !arg) {
                    terminalRef.current.echo(
                        `${files.cv}${space}${directories.about}${space}${directories.projects}${newLine}`
                    );
                }
            },
            whoami() {
                terminalRef.current.echo(`${myName}${newLine}`);
            },
            cat(file) {
                if (file === 'cv.txt' || file === 'cv') {
                    window.open(cvPdf);
                } else {
                    terminalRef.current.echo(`File not found.${newLine}`);
                }
            },
            more(file) {
                if (file === 'cv.txt' || file === 'cv') {
                    window.open(cvPdf);
                } else {
                    terminalRef.current.echo(`File not found.${newLine}`);
                }
            },
            cd(directory) {
                if (directory === "/about" || directory === "about") {
                    navigate('/about');
                } else if (directory === "/projects" || directory === "projects") {
                    navigate('/projects');
                } else if (directory === "/secret" || directory === "secret") {
                    terminalRef.current.push((password) => {
                        if (password === `${secretPassword}`) {
                            fetch(`${backendUrl}/generate-token`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ password }),
                                credentials: 'include'
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.secret_token) {
                                        Cookies.set('secret_token', data.secret_token, { path: '/' });
                                        window.open('/secret');
                                    } else {
                                        terminalRef.current.error(`Failed to get the redirect URL.${newLine}`);
                                    }
                                })
                                .catch(error => {
                                    console.error('Error fetching the redirect URL:', error);
                                    terminalRef.current.error(`There was an error. Please try again.${newLine}`);
                                });
                            terminalRef.current.pop();
                        } else {
                            terminalRef.current.error(`Incorrect password. Access denied.${newLine}`);
                            terminalRef.current.pop();
                        }
                    }, {
                        prompt: `[${colors.white}Enter password:] `,
                        name: 'passwordPrompt',
                        mask: true,
                    });
                } else {
                    terminalRef.current.echo(`[${colors.white}-bash: cd: ${directory}: No such file or directory]${newLine}`);
                }
            },
            exit() {
                document.querySelector(".custom-terminal").remove();
                document.querySelector(".heading").style.display = "block";
                setShowTerminal(false);
            }
        };

        const term = $('.my-terminal').terminal(commands, {
            greetings: false,
            checkArity: false,
            completion: true,
            prompt: `[${colors.purple}alexisbeaumont@website]:[${colors.purple}~ $] `,
            echoCommand: false,
            onCommandNotFound: (command) => {
                term.echo(`[${colors.white}-bash: ${command}: command not found]${newLine}`);
            }
        });

        terminalRef.current = term;

        function ready() {
            const ascii = render(`Welcome${newLine}`);
            const lines = ascii.split(newLine);
            const cols = term.cols();
            const paddedLines = lines.map(line => {
                const padding = Math.floor((cols - line.length) / 2);
                return ' '.repeat(padding) + line;
            });
            terminalRef.current.echo(`[${colors.purple}${paddedLines.join(newLine)}]${newLine}Type "help" to see available commands.${newLine}`);
        }

        function render(text) {
            const cols = term.cols();
            return figlet.textSync(text, {
                font: font,
                width: cols,
                whitespaceBreak: true
            });
        }

        const command_list = ['clear'].concat(Object.keys(commands));
        const help = formatter.format(command_list);
    };

    useEffect(() => {
        if (showTerminal) {
            initializeTerminal();
        }
    }, [showTerminal]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.set_prompt(`[${colors.purple}alexisbeaumont@website]:[${colors.green}${path}]$ `);
        }
    }, [path]);

    return { terminalRef, initializeTerminal };
};

export default useTerminal;
