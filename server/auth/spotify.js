const passport = require('passport')
const router = require('express').Router()
const SpotifyStrategy = require('passport-spotify').Strategy
const {User} = require('../db/models')
require('../../secrets.js')
module.exports = router

if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  console.log('Spotify client ID / secret not found. Skipping Spotify OAuth.')
} else {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(obj, done) {
    done(null, obj)
  })

  const strategy = new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_CALLBACK
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      process.nextTick(function() {
        console.log('Profile: ', profile)
      })
      User.findOrCreate({
        where: {
          SpotifyId: profile.id
        },
        defaults: {
          name: profile.displayName,
          SpotifyId: profile.id,
          accessToken: accessToken,
          proPic: profile.photos[0],
          refreshToken: refreshToken
        }
      })
        .spread(function(user) {
          console.log('Making user: ', user)
          done(null, user)
        })
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private']
    })
  )

  router.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  )
}
