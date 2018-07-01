import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const About = () => (
	<div className="about">
		<h2>How does it work?</h2>
		<p>
			Fettler is an automation service for managing <a href="https://fetlife.com/">FetLife</a> user
			profiles. It allows you to enable features such as auto-accepting all friend requests. The
			service accomplishes this by speaking to the FetLife API on your behalf periodically, roughly
			every 15 minutes.
		</p>
		<p>
			When you submit your FetLife username and password into the Fettler login form, they will not
			be sent to the Fettler service. Instead your web browser will log into the FetLife API
			directly, in the same way that the FetLife Android mobile app would, and it will fetch an
			authorization token which represents you. Your web browser will then send this token to the
			Fettler service to verify your identity and load any existing settings.
		</p>
		<p>
			After you log into Fettler, you may enable Fettler features by checking the &quot;Enable
			Fettler&quot; checkbox. When you do this, your authorization token will be sent to the Fettler
			service to save for the purpose of accessing FetLife on your behalf, as described above.
			Because the FetLife API does not support granular permissions, this token effectively grants
			Fettler the ability to do anything with your account that the FetLife Android mobile app can.
		</p>
		<p>
			If you disable your Fettler features by unchecking the &quot;Enable Fettler&quot; box, any
			authorization token previously saved for you in the Fettler service will be deleted, and
			Fettler will no longer be able to connect to FetLife on your behalf nor access your private
			data. Fettler will however continue to store your other feature settings in case you decide
			to reenable in the future.
		</p>
		<p>
			To the best of my knowledge, there is no way for a user to revoke a token from the FetLife
			end. If you have submitted a token to Fettler and would like to revoke it, just log in here
			again and disable Fettler as described above. Alternatively, if you deactivate your FetLife
			account for more than 15 minutes, Fettler will likely fail to connect as you, assume the token
			on record is bad, throw it away, and auto-disable Fettler features for your user.
		</p>
		<h2>What?? Who are you?</h2>
		<p>
			Fettler was created by <a href="https://fetlife.com/users/5505863">joe_soap</a> with the
			primary intent of making it easier to administer shared FetLife profiles for local groups.
			Many groups have a policy of accepting all friend requests to their group profile, and it
			can be a hassle for organizers to repeatedly log out of their own FetLife accounts and back
			in as the shared group user just to handle that. This is simple work that can and should be
			automated, and hence Fettler was born.
		</p>
		<h2>Why should I trust you?</h2>
		<p>
			Frankly, you should not trust me if you don&apos;t know me. By logging in here, you are
			effectively providing me with full access to your account. There are a number of risks
			involved in that, for example:
		</p>
		<ol>
			<li>I could use your tokens for nefarious purposes</li>
			<li>I could be lying in my explanation of how the app works</li>
			<li>I could be storing your tokens insecurely, potentially allowing others to access them</li>
			<li>This could be a counterfeit website someone has created to harvest passwords</li>
			<li>You could run afoul of the FetLife terms of service</li>
			<li>The software could have bugs that cause unexpected behavior</li>
		</ol>
		<p>
			Ultimately it is up to you to determine whether using this application is within your risk
			profile. I am sharing it with the groups I work with, and I figured I would release it
			publicly in case anyone else finds it useful. Here are some mitigating factors for the risks
			listed above, respectively:
		</p>
		<ol>
			<li>
				I pledge not to use your tokens for any purpose other than allowing Fettler to perform
				the features you configure it to perform on your behalf.
			</li>
			<li>
				All of the Fettler application and service code
				is <a href="https://github.com/soapsropes">open-source</a>, although I cannot prove that
				this site is running the same code. You can theoretically build your own copy of
				the <a href="https://github.com/soapsropes/fettler-web">web application</a> to connect to
				the Fettler service from. And if you&apos;re technically savvy enough and willing to
				invest the resources, you can even deploy your own copy of
				the <a href="https://github.com/soapsropes/fettler-services">Fettler API</a> to an Amazon
				Web Services account so that you never have to send me your token.
			</li>
			<li>
				I try to follow strong security practices, and the source code is available for review,
				but let&apos;s face it: if you log in through this application, you&apos;re already
				sacrificing some amount of security for convenience. I pledge to do a better job of
				protecting access to your account than you did, and I will disclose any breaches.
			</li>
			<li>
				This certainly could be a counterfeit website, considering that I have provided the
				source code for anyone to run a copy of it. You should verify that you are accessing
				Fettler via a proper URL that I have vouched for elsewhere (not on this site) before
				entering your credentials.
			</li>
			<li>
				To the best of my knowledge, the FetLife terms of use as of July 1, 2018, disallow
				several uses of automation: scamming promotions, harvesting data, and creating accounts.
				The Fettler application does none of these things, so you should be ok to use it. It
				effectively just performs routine tasks for you that you otherwise would have done manually.
			</li>
			<li>
				All software has flaws. I have released Fettler as open-source, which is a double-edged
				sword. It allows more eyes to find any flaws to help improve the software, but it also means
				that an intelligent, nefarious actor could find a flaw and refrain from disclosing it.
				I am hopeful that this application is simple enough that the risk of this is low.
			</li>
		</ol>
		<p>
			In conclusion, use Fettler at your own risk, or perhaps better yet, don&apos;t use it at all.
			But I know some of you are going to ignore that sage advice, so I have done and will continue
			to do my best to make this a pleasant experience for you.
		</p>
		<div className="footer">
			<NavLink to="/">[Back to the app]</NavLink>
		</div>
	</div>
);

export default connect()(About);

