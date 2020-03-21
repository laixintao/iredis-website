/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const INSTALLATION_MARKDOWN = `
## Install

IRedis was wroten in pure python, you can install via pip:

\`\`\`bash
$ pip install iredis
\`\`\`


Or just download the binary, you can run in a environment without python!

\`\`\`bash
wget  https://github.com/laixintao/iredis/releases/latest/download/iredis.tar.gz \
 && tar -xzf iredis.tar.gz \
 && ./iredis
\`\`\`
`;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <div className="projectTitle" style={{ textAlign: "center" }}>
        {props.title}
        <small>{props.tagline}</small>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div className="index-hero">
        <div className="index-hero-inner">
          <h1 className="index-hero-project-tagline">
            <img
              alt="Docusaurus with Keytar"
              className="index-hero-logo"
              src={`${siteConfig.baseUrl}img/demo.svg`}
            />
            <div className="index-hero-header-text">
              Interactive Redis
              <br />A Terminal Client for Redis with{" "}
              <span className="index-hero-project-keywords">
                AutoCompletion
              </span>{" "}
              and <span style={{ color: "#A10005" }}>S</span>
              <span style={{ color: "#cc2244" }}>y</span>
              <span style={{ color: "#bb4444" }}>n</span>
              <span style={{ color: "#996644" }}>t</span>
              <span style={{ color: "#cc8844" }}>a</span>
              <span style={{ color: "#ccaa44" }}>x</span>{" "}
              <span style={{ color: "#bbaa44" }}>H</span>
              <span style={{ color: "#99aa44" }}>i</span>
              <span style={{ color: "#778844" }}>g</span>
              <span style={{ color: "#55aa44" }}>h</span>
              <span style={{ color: "#33aa44" }}>l</span>
              <span style={{ color: "#11aa44" }}>i</span>
              <span style={{ color: "#11aa66" }}>g</span>
              <span style={{ color: "#11aa88" }}>t</span>
              <span style={{ color: "#11aaaa" }}>i</span>
              <span style={{ color: "#11aacc" }}>n</span>
              <span style={{ color: "#11aaee" }}>g</span>
            </div>
          </h1>

          <div className="index-ctas">
            <a
              className="button index-ctas-get-started-button"
              href="#install"
            >
              Install NOW!
            </a>
            <span className="index-ctas-github-button">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=laixintao&amp;repo=iredis&amp;type=star&amp;count=true&amp;size=large"
                frameBorder={0}
                scrolling={0}
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );


    const Demos = () => (
      <div>
        <Block background="light">
          {[
            {
              content:
                "Feel tired of manualy copy and paste the key's name for GET command? IRedis has auto-completion for keys, hash members, etc, with a LRU strategy. ",
              image: `${baseUrl}img/casts/features/keys_completion.cast.svg`,
              imageAlign: "right",
              title: "Smart Completion"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content: "IRedis will make response more readable for you. ",
              image: `${baseUrl}img/casts/features/render.cast.svg`,
              imageAlign: "left",
              title: "Friendly Response"
            }
          ]}
        </Block>
        <Block background="light">
          {[
            {
              content:
                "IRedis support Peek command, to check the key's type then automaticly call get/lrange/sscan, etc, depends on types. You don't need to call type command then type another command to get value. Peek will also display the key's length and memory usage. ",
              image: `${baseUrl}img/casts/features/peek.cast.svg`,
              imageAlign: "right",
              title: "Peek Command"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content:
                "New to Redis? Ok, try --newbie mode. IRedis will acommpany with you on the road to an expert! ",
              image: `${baseUrl}img/casts/features/newbie.cast.svg`,
              imageAlign: "left",
              title: "Newbie mode"
            }
          ]}
        </Block>
        <Block background="light">
          {[
            {
              content:
                "Have trouble remembering Redis' commands? IRedis will give you a hint on bottom-bar. ",
              image: `${baseUrl}img/casts/features/bottom_bar.cast.svg`,
              imageAlign: "right",
              title: "Bottom Bar Help"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content:
                "Wait, you already have typed that command before! Let IRedis complete that for you! ",
              image: `${baseUrl}img/casts/features/history.cast.svg`,
              imageAlign: "left",
              title: "Fish Style History"
            }
          ]}
        </Block>
        <Block background="light">
          {[
            {
              content: "IRedis will decode response for you! ",
              image: `${baseUrl}img/casts/features/decode.cast.svg`,
              imageAlign: "right",
              title: "Decode Response"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content:
                "Don't afraid to type the wrong command, we have syntax checker! ",
              image: `${baseUrl}img/casts/features/command_validation.cast.svg`,
              imageAlign: "left",
              title: "Command Validation"
            },
            {
              content:
                "Shake with fear when typing command on production? IRedis will protect you from running dangerous commands!",
              image: `${baseUrl}img/casts/features/warning.cast.svg`,
              imageAlign: "left",
              title: "Prevent Dangerous Command on Server"
            }
          ]}
        </Block>
        <Block background="light">
          {[
            {
              content:
                "Stored some json in redis? Now you can use you favorite shell tools to parse Redis Response, IRedis will using pipe response to shell process. ",
              image: `${baseUrl}img/casts/features/pipeline.cast.svg`,
              imageAlign: "right",
              title: "Pipeline to Shell"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content:
                "You can also use HELP command to check the manual of Redis commands.",
              image: `${baseUrl}img/casts/features/help.cast.svg`,
              imageAlign: "left",
              title: "Built in Documentation"
            }
          ]}
        </Block>
        <Block background="light">
          {[
            {
              content:
                "IRedis support keepalive and retry for connection issues.",
              image: `${baseUrl}img/casts/features/retry.cast.svg`,
              imageAlign: "right",
              title: "Auto Retry"
            }
          ]}
        </Block>
        <Block background="dark">
          {[
            {
              content: "Rainbow prompt! It's useless, yes, but cool. ",
              image: `${baseUrl}img/casts/features/rainbow.cast.svg`,
              imageAlign: "left",
              title: "Rainbow Prompt"
            }
          ]}
        </Block>
      </div>
    );

    const Install = () => (
      <Container padding={["bottom", "top"]}>
        <MarkdownBlock>{INSTALLATION_MARKDOWN}</MarkdownBlock>
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content:
              "IRedis will complete for you while you are typing, completion are based on your input history and response history, dont' worry, no extra commands are sent.",
            image: `${baseUrl}img/undraw_typewriter.svg`,
            imageAlign: "top",
            title: "Auto-completion"
          },
          {
            content:
              "IRedis will give you hint about command syntax, complexity, etc. You can also the manual using HELP builtin command.",
            image: `${baseUrl}img/undraw_chat_bot_kli5.svg`,
            imageAlign: "top",
            title: "Command Hint"
          },
          {
            content:
              "IRedis will prevent accidentally running dangerous commands, like KEYS * .",
            image: `${baseUrl}img/undraw_Security_on_ff2u.svg`,
            imageAlign: "top",
            title: "Safe to Run in Production"
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Demos />
          <Install />
        </div>
      </div>
    );
  }
}

module.exports = Index;
