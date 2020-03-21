/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Status</h5>
            <a href="https://badge.fury.io/py/iredis">
              Current version:{" "}
              <br />
              <img
                src="https://badge.fury.io/py/iredis.svg"
                alt="PyPI version"
              />
            </a>
          </div>
          <div>
            <h5>More Cool Dbclis!</h5>
            <a href="https://www.dbcli.com">DBCli</a>
            <a href="https://www.mycli.net">mycli</a>
            <a href="https://www.pgcli.com/">pgcli</a>
          </div>
          <div>
            <h5>More</h5>
            <a
              className="github-button"
              href="https://github.com/laixintao"
              aria-label="Follow @laixintao on GitHub"
            >
              Follow @laixintao
            </a>
            <a href="https://kawabangga.com">卡瓦邦噶！(My Blog In Chinese)</a>
            <a href="https://twitter.com/hashtag/IRedis">Twitter #IRedis</a>
            <a href="https://t.me/iredis_users">Join Our Chat on Telegram</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
